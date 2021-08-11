package main

import (
	"log"
	"net"
	"net/http"

	""
	"github.com/aglide100/dak-blog/pkg/svc"
	"github.com/aglide100/dak-blog/pkg/router"
)

func main() {
	rtr := router.NewRouter()

	rtr.AddRule("default", "GET", "^/$", defaultCtrl.ServeHTTP)
	rtr.AddRule("svc", "GET", "/test", svc.TestHttpRequest)

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

}
