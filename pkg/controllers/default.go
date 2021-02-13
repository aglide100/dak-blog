package controllers

import (
	"log"
	"net/http"
)

type DefaultController struct {
}

func (hdl *DefaultController) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
	http.Redirect(resp, req, req.RequestURI, http.StatusPermanentRedirect)
	log.Printf("defaultController: serving redirect")
}
