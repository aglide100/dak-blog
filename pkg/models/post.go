package models

type Post struct {
	ID          int64
	Title       string
	Author      string
	WrittenDate string
	UpdateDate  string
	Comment     string
	PictureURLs []string
	Thumbnail   string
}
