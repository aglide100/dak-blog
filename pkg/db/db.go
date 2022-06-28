package db

import (
	"database/sql"
	"fmt"
	"log"

	pb_unit_post "github.com/aglide100/dak-blog/pb/unit/post"
	"github.com/aglide100/dak-blog/pkg/models"
)

type GitDB interface{
	WriteGitFile(file *models.File) (error)
	WriteGitFileFromArray(files []*models.File) (error)
	GetGitFile(url string) (*models.File)
	DeleteGitFile(url string) (error)
	UpdateGitFile(file *models.File) (error)
}

type DB interface {
	ConnectDB(host string, port int, user, password, dbname string) (*Database, error)
	SearchPosts(keyword string) ([]*pb_unit_post.Post, error)
	GetPost(id int64) (*pb_unit_post.Post, error)
	WritePost(post *pb_unit_post.Post) (error)
	UpdatePost(post *pb_unit_post.Post, id int64) (error)
	// github file
}

type Database struct {
	Conn *sql.DB
	GitDB
}

type DBConfig struct {
	Host string 
	Port int 
	User string 
	Password string 
	Dbname string 
	Sslmode string 
	Sslrootcert string 
	Sslkey string 
	Sslsert string
}


func ConnectDB(config *DBConfig) (*Database, error) {
	psqInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=%s",
	config.Host, config.Port, config.User, config.Password, config.Dbname, config.Sslmode)
	log.Printf("Db config :%v", psqInfo)

	db, err := sql.Open("postgres", psqInfo)
	if err != nil {
		return nil, err
	}
	
	err = db.Ping()
	if err != nil {
		return nil, err
	}

	// defer db.Close()

	return &Database{Conn: db}, nil
}

