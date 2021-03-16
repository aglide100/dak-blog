package main

import (
	"log"
	"net"
	"net/http"

	"github.com/aglide100/personel-blog/pkg/api"
	"github.com/aglide100/personel-blog/pkg/controllers"
	"github.com/aglide100/personel-blog/pkg/router"
)

func main() {
	defaultCtrl := &controllers.DefaultController{}
	notFoundCtrl := &controllers.NotFoundController{}
	apiCtrl := &api.ApiController{}

	rtr := router.NewRouter(notFoundCtrl)

	rtr.AddRule("default", "GET", "^/$", defaultCtrl.ServeHTTP)
	rtr.AddRule("api", "GET", "/test", apiCtrl.TestHttpRequest)

	ln, err := net.Listen("tcp", "localhost:8888")
	if err != nil {
		log.Printf("Can't listen by tcp")
	}
	defer ln.Close()

	srv := http.Server{Handler: rtr}
	log.Printf("listening on address %q", ln.Addr().String())

	log.Printf("starting server at address %q", ln.Addr().String())

	err = srv.Serve(ln)
	//err = srv.Serve(ln)
	if err != nil {
		log.Printf("Can't serve!")
	}

}
