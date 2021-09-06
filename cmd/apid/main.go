package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"sync"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	pb_svc "github.com/aglide100/dak-blog/pb/svc"
	"github.com/aglide100/dak-blog/pkg/svc/controllers"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
)

var (
	dbAddr = os.Getenv("DB_ADDR")
	dbPort = os.Getenv("DB_PORT")
	dbUser = os.Getenv("DB_USER")
	dbPasswd = os.Getenv("DB_PASSWORD")
	dbName = os.Getenv("DB_NAME")
	serverCrt = "keys/server.crt"
	serverKey = "keys/server.key"
)

func main() {
	if err := realMain(); err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
}

func realMain() error {	
	gRPCWebAddr := flag.String("grpc.addr", "0.0.0.0:8080", "grpc address")
	usingTls := flag.Bool("grpc.tls", false, "using http2")

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

		creds, err := credentials.NewServerTLSFromFile(serverCrt, serverKey)
		if err != nil {
			log.Fatalf("fail to load creds: %v", err)
		}
		opts = append(opts, grpc.Creds(creds))
	}

	postSrv := controllers.NewPostServiceController()
	accountSrv := controllers.NewAccountServiceController()
	commentSrv := controllers.NewAccountServiceController()
	grpcServer := grpc.NewServer(opts...)
	
	pb_svc.RegisterPostServer(grpcServer, postSrv)
	pb_svc.RegisterAccountServer(grpcServer, accountSrv)
	pb_svc.RegisterCommentServer(grpcServer, commentSrv)


	go func() error {
		wrappedServer := grpcweb.WrapServer(grpcServer, grpcweb.WithOriginFunc(func(origin string) bool {
			// for test, TODO fix here
			return true
		}))

		handler := http.Handler(http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
			log.Println("in handler....")
			if wrappedServer.IsGrpcWebRequest(req) || wrappedServer.IsAcceptableGrpcCorsRequest(req) {
				wrappedServer.ServeHTTP(resp, req)
			}
		}))

		// handler := func(resp http.ResponseWriter, req *http.Request) {
		// 	log.Println("in handler....")
		// 	if wrappedServer.IsGrpcWebRequest(req) || wrappedServer.IsAcceptableGrpcCorsRequest(req) {
		// 		wrappedServer.ServeHTTP(resp, req)
		// 	}
		// }

		// httpServer := &http.Server{
		// 	Addr: *gRPCWebAddr,
		// 	Handler: handler,
		// }

		log.Printf("Starting grpc server... %s", *gRPCWebAddr)
		err := http.ListenAndServeTLS("0.0.0.0:8089", serverCrt , serverKey , handler)
		// err := http.ListenAndServe("0.0.0.0:8089", handler)
		// 
		// err := httpServer.ServeTLS(gRPCWebAddrL,serverCrt, serverKey)
		if err != nil {
			log.Fatalln("When error at serving grpc web... ", err)
		} 

		return err
	} ()

	wait.Wait()
	
	return nil
}

