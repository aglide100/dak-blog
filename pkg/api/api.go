package api

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/aglide100/personel-blog/pkg/models"
)

func TestHttpRequest(resp http.ResponseWriter, req *http.Request) {
	log.Printf("api: receive http xml request!")
	var test = `{"Name":"test","Email":"test","UserID":"test"}`
	a, err := json.Marshal(test)
	if err != nil {
		http.Error(resp, err.Error(), http.StatusInternalServerError)
	}
	resp.Write(a)
}
 
func SignIn(resp http.ResponseWriter, req *http.Request) {
	log.Printf("api: receive Login User")
}

func GetPost(resp http.ResponseWriter, req *http.Request, post *models.Post) {
	log.Printf("api: receive getting post")
	a, err := json.Marshal(post)
	if err != nil {
		http.Error(resp, err.Error(), http.StatusInternalServerError)
	}
	resp.Write(a)
}