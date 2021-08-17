package svc

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/golang/protobuf/proto"

	"github.com/aglide100/dak-blog/pkg/models"

	pb "github.com/aglide100/dak-blog/pkg/pb/unit"
)

const (filename = "person")

func TestHttpRequest(resp http.ResponseWriter, req *http.Request) {
	log.Printf("api: receive http xml request!")
	
	person := &pb.Person{Name: "apple", Age: "12"}
	out, err := proto.Marshal(person)

	if err != nil {
		log.Fatalf("Failed to write buff %v", err)
	}

	resp.Write(out)
	// var test = `{"Name":"test","Email":"test","UserID":"test"}`
	// a, err := json.Marshal(test)
	// if err != nil {
	// 	http.Error(resp, err.Error(), http.StatusInternalServerError)
	// }
	// resp.Write(a)
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