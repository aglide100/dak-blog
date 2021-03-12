package db

import "github.com/aglide100/personel-blog/pkg/models"

type DB interface {
	ConnectDB(host string, port int, user, password, dbname string) (*Database, error)
	SearchReviews(keyword string) ([]*models.Post, error)
}