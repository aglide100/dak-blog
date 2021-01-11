package controllers

import (
	"log"
	"net/http"
)

type DefaultController struct {
}

func (hdl *DefaultController) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
	uri := "https://" + req.Host + "/reviews"
	if len(req.URL.RawQuery) > 0 {
		uri += "?" + req.URL.RawQuery
	}
	log.Printf("redirect to https: %v", uri)

	http.Redirect(resp, req, uri, http.StatusPermanentRedirect)
	log.Printf("defaultController: serving redirect")
}
