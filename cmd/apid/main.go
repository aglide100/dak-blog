package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"
	"sync"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	pb_svc "github.com/aglide100/dak-blog/pb/svc"
	"github.com/aglide100/dak-blog/pkg/db"
	"github.com/aglide100/dak-blog/pkg/svc/servers"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/joho/godotenv"
	"golang.org/x/sync/errgroup"
)

var (
	gRPCWebAddr = flag.String("grpc.addr", "0.0.0.0:10112", "grpc address")
	usingTls = flag.Bool("grpc.tls", true, "using http2")
	serverCrt = flag.String("cert.crt", "keys/server.crt", "crt file location")
	serverKey = flag.String("cert.key", "keys/server.key", "ket file location")
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Printf("Can't load .env file!: %s", err)
	}

	if err := realMain(); err != nil {
		log.Printf("err: %s", err)
		// log.Fatal(err)
		os.Exit(1)
	}
}

func realMain() error {
	gRPCWebAddrL, err := net.Listen("tcp", *gRPCWebAddr)
	if err != nil {
		return err
	}
	defer gRPCWebAddrL.Close()

	var wait sync.WaitGroup
	wait.Add(1)

	var opts []grpc.ServerOption
	tls := *usingTls
	if tls {
		fmt.Println("Using tls keys")

		creds, err := credentials.NewServerTLSFromFile(*serverCrt, *serverKey)
		if err != nil {
			log.Fatalf("fail to load creds: %v", err)
		}
		opts = append(opts, grpc.Creds(creds))
	}

	dbAddr := os.Getenv("DB_ADDR")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPasswd := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")

	dbport, err := strconv.Atoi(dbPort)
	if err != nil {
		return fmt.Errorf("Can't read dbPort!: %v %v", dbPort, err)
	}
	// log.Printf("%v", dbName)
	
	myDB, err := db.ConnectDB(&db.DBConfig{
		Host : dbAddr, 
		Port : dbport, 
		User : dbUser, 
		Password : dbPasswd, 
		Dbname : dbName, 
		Sslmode : "disable", 
		// Sslmode : "verify-full", 
		// Sslrootcert : "keys/ca.crt", 
		// Sslkey : "keys/client.key", 
		// Sslsert : "keys/client.crt", 
	})
	if err != nil {
		return fmt.Errorf("Can't connect DB: %v", err)
	}

	postSrv := servers.NewPostServiceServer(myDB)
	accountSrv := servers.NewAccountServiceServer()
	commentSrv := servers.NewCommentServiceServer()
	grpcServer := grpc.NewServer(opts...)
	
	pb_svc.RegisterPostServer(grpcServer, postSrv)
	pb_svc.RegisterAccountServer(grpcServer, accountSrv)
	pb_svc.RegisterCommentServer(grpcServer, commentSrv)

	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx

	wg.Go(func() error {
		wrappedServer := grpcweb.WrapServer(grpcServer, grpcweb.WithOriginFunc(func(origin string) bool {
			// for test, TODO fix here
			return true
		}))

		handler := http.Handler(http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
			if wrappedServer.IsGrpcWebRequest(req) || wrappedServer.IsAcceptableGrpcCorsRequest(req) {
				wrappedServer.ServeHTTP(resp, req)
			}
		}))

		log.Printf("Starting grpc server... %s", *gRPCWebAddr)
		var err error
		if *usingTls { 
			err = http.ServeTLS(gRPCWebAddrL, handler, *serverCrt , *serverKey)
		} else {
			log.Println("starting without tls....")
			err = http.Serve(gRPCWebAddrL, handler)
		}

		if err != nil {
			log.Fatalln("When error at serving grpc web... ", err)
		} 

		return err
	})
	
	
	return wg.Wait()
}

