package db

import (
	"fmt"
	"database/sql"
	pb_unit_post "github.com/aglide100/dak-blog/pb/unit/post"
)

type DB interface {
	ConnectDB(host string, port int, user, password, dbname string) (*Database, error)
	SearchPosts(keyword string) ([]*pb_unit_post.Post, error)
	GetPost(id int64) (*pb_unit_post.Post, error)
	WritePost(post *pb_unit_post.Post) (error)
	UpdatePost(post *pb_unit_post.Post, id int64) (error)
}

type Database struct {
	Conn *sql.DB
}

func ConnectDB(host string, port int, user string, password string, dbname string) (*Database, error) {
	psqInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqInfo)
	if err != nil {
		return nil, fmt.Errorf("connecting to db: %v", err)
	}
	return &Database{Conn: db}, nil
}
