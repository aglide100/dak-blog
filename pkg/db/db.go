package db

import (
	pb_unit_post "github.com/aglide100/dak-blog/pkg/pb/unit/post"
)

type DB interface {
	ConnectDB(host string, port int, user, password, dbname string) (*Database, error)
	SearchPosts(keyword string) ([]*pb_unit_post.Post, error)
	GetPost(id int64) (*pb_unit_post.Post, error)
	WritePost(post *pb_unit_post.Post) (error)
	UpdatePost(post *pb_unit_post.Post, id int64) (error)
}