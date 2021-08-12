package post

import (
	"github.com/aglide100/dak-blog/pkg/db"
	"github.com/aglide100/dak-blog/pkg/models"
)

type POST interface {
	NewPostController(db *db.Database) *PostController
	GetPostList(resp http.ResponseWriter, req *http.Request) []*models.Post
	GetPost(resp http.ResponseWriter, req *http.Request) *models.Post
}