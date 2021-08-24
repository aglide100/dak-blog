package main

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"

	"github.com/aglide100/dak-blog/pkg/controllers"
	"github.com/aglide100/dak-blog/pkg/db"
	"github.com/aglide100/dak-blog/pkg/router"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

var (
	dbAddr = os.Getenv("DB_ADDR")
	dbPort = os.Getenv("DB_PORT")
	dbUser = os.Getenv("DB_USER")
	dbPasswd = os.Getenv("DB_PASSWORD")
	dbName = os.Getenv("DB_NAME")
)

func main() {
	// if err := realMain(); err != nil {
	// 	log.Fatal(err)
	// 	os.Exit(1)
	// }
	if err := realMain(); err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
}

func useTlsMain() error {
	ln, err := net.Listen("tcp", "0.0.0.0:50055")
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
	log.Println("Starting grpc server...")
	grpcServer := grpc.NewServer(opts...)

	err = grpcServer.Serve(ln)
	if err != nil {
		log.Printf("Can't serve!")
	}
	return nil
}


func realMain() error {
	log.Printf("start realmain")

	rtr := router.NewRouter()

	dbPort, err := strconv.Atoi(dbPort)
	if err != nil {
		log.Fatalf("Can't convert db port! %v", err)
	}

	db, err := db.ConnectDB(dbAddr, dbPort, dbUser, dbPasswd, dbName)
	if err != nil {
		log.Fatalf("Can't connect DB! %v", err)
	}

	postCtrl := controllers.NewPostController(db)

	rtr.AddRule("post", "GET", "/getpost/([0-9]+)$", postCtrl.GetPost)
	rtr.AddRule("post", "GET", "", postCtrl.DeletePost )

	// rtr.AddRule("user", "POST", "/auth/signin", userCtrl.SignInUser)

	ln, err := net.Listen("tcp", "0.0.0.0:8888")
	if err != nil {
		log.Printf("Can't listen by tcp")
	}
	defer ln.Close()

	srv := http.Server{Handler: rtr}
	log.Printf("listening on address %q", ln.Addr().String())

	log.Printf("starting server at address %q", ln.Addr().String())
	
	err = srv.Serve(ln)
	if err != nil {
		log.Printf("Can't serve!")
	}
	return nil
}