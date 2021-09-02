package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	pb_svc "github.com/aglide100/dak-blog/pb/svc"
	"github.com/aglide100/dak-blog/pkg/svc/controllers"
)

var (
	dbAddr = os.Getenv("DB_ADDR")
	dbPort = os.Getenv("DB_PORT")
	dbUser = os.Getenv("DB_USER")
	dbPasswd = os.Getenv("DB_PASSWORD")
	dbName = os.Getenv("DB_NAME")
)

func main() {
	if err := realMain(); err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
}

func realMain() error {
	ln, err := net.Listen("tcp", "0.0.0.0:50011")
	if err != nil {
		log.Printf("Can't listen by tcp")
	}
	defer ln.Close()

	var opts []grpc.ServerOption
	tls := false
	if tls {
		fmt.Println("Using tls keys")
		serverCrt := "keys/server.crt"
		serverPem := "keys/server.pem"
		creds, err := credentials.NewServerTLSFromFile(serverCrt, serverPem)
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

	log.Println("Starting grpc server...")
	err = grpcServer.Serve(ln)
	if err != nil {
		log.Printf("Can't serve!")
	}
	return nil
}
