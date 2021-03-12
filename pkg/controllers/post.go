package controllers

import (
	"fmt"
	"log"
	"net/http"

	"github.com/aglide100/personel-blog/pkg/db"
)

type PostController struct {
	db *db.Database
}

func NewPostController(db *db.Database) *PostController {
	return &PostController{db:db}
}

func (hdl *PostController) getPostList(resp http.ResponseWriter, req *http.Request) {
	log.Printf("receive request get post list")
	list,err := hdl.db.SearchReviews("")
	if err != nil {
		log.Printf("Can't get post list!")
	}

	fmt.Printf("List : %v", list)
}

