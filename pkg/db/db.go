package db

import (
	"database/sql"
	"fmt"

	pb_unit_post "github.com/aglide100/dak-blog/pb/unit/post"
	"github.com/aglide100/dak-blog/pkg/models"
)

type DB interface {
	ConnectDB(host string, port int, user, password, dbname string) (*Database, error)
	SearchPosts(keyword string) ([]*pb_unit_post.Post, error)
	GetPost(id int64) (*pb_unit_post.Post, error)
	WritePost(post *pb_unit_post.Post) (error)
	UpdatePost(post *pb_unit_post.Post, id int64) (error)
	// github file
	WriteGitFile(file *models.File) (error)
	WriteGitFileFromArray(files []*models.File) (error)
	GetGitFile(url string) (*models.File)
	DeleteGitFile(url string) (error)
	UpdateGitFile(file *models.File) (error)
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
	
	err = db.Ping()
	if err != nil {
		return nil, err
	}

	// defer db.Close()

	return &Database{Conn: db}, nil
}

