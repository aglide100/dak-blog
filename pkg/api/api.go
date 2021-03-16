package api

import (
	"encoding/json"
	"log"
	"net/http"
)

type ApiController struct {
}

func (hdl *ApiController) TestHttpRequest(resp http.ResponseWriter, req *http.Request) {
	log.Printf("apiController: receive http xml request!")
	var test = `{"Name":"test","Email":"test","UserID":"test"}`
	a, err := json.Marshal(test)
	if err != nil {
		http.Error(resp, err.Error(), http.StatusInternalServerError)
	}
	resp.Write(a)
}
