package controllers

import (
	"fmt"
	"log"
	"net/http"

	"github.com/aglide100/dak-blog/pkg/db"
	"github.com/golang/protobuf/proto"
)

type PostController struct {
	db *db.Database
}

func NewPostController(db *db.Database) *PostController {
	return &PostController{db:db}
}

func (hdl *PostController) GetPostList(resp http.ResponseWriter, req *http.Request) {
	log.Printf("receive request get post list")
	list,err := hdl.db.SearchPosts("")
	if err != nil {
		log.Printf("Can't get post list!")
	}

	fmt.Printf("List : %v", list)
}

func (hdl *PostController) GetPost(resp http.ResponseWriter, req *http.Request) {
	log.Printf("receive request get post")

	post, err := hdl.db.GetPost()
	if err != nil {
		log.Printf("Can't get post")
	}
	
	out, err := proto.Marshal(post)
	if err != nil {
		http.Error(resp, err.Error(), http.StatusInternalServerError)
	}

	resp.Write(out)
}	

func (hdl *PostController) DeletePost(resp http.ResponseWriter, req *http.Request) {
	log.Printf("receive request get delete post")
}
