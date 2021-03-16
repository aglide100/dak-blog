package controllers

import (
	"fmt"
	"log"
	"net/http"

	"github.com/aglide100/personel-blog/pkg/db"
	"github.com/aglide100/personel-blog/pkg/models"
)

type PostController struct {
	db *db.Database
}

func NewPostController(db *db.Database) *PostController {
	return &PostController{db:db}
}

func (hdl *PostController) GetPostList(resp http.ResponseWriter, req *http.Request) []*models.Post {
	log.Printf("receive request get post list")
	list,err := hdl.db.SearchPosts("")
	if err != nil {
		log.Printf("Can't get post list!")
	}

	fmt.Printf("List : %v", list)
	return list
}

func (hdl *PostController) GetPost(resp http.ResponseWriter, req *http.Request) *models.Post {
	log.Printf("receive request get post")

	post, err := hdl.db.GetPost()
	if err != nil {
		log.Printf("Can't get post")
	}

	return post
}	
