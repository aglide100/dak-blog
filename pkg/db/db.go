package db

import "github.com/aglide100/personel-blog/pkg/models"

type DB interface {
	ConnectDB(host string, port int, user, password, dbname string) (*Database, error)
	SearchPosts(keyword string) ([]*models.Post, error)
	GetPost(id int64) (*models.Post, error)
	WritePost(post *models.Post) (error)
	UpdatePost(post *models.Post, id int64) (error)
}