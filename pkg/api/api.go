package api

import (
	"log"
	"net/http"
)

type ApiController struct {

}

func (hdl *ApiController) GetHttpRequest(resp http.ResponseWriter, req *http.Request) {
	log.Printf("apiController: receive http xml request!")
	
}