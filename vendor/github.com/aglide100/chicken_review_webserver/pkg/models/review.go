package models

type Review struct {
	Title             string
	Author            string
	StoreName         string
	Date              string
	PhoneNumber       string
	Comment           string
	Score             int
	ID                int64
	PictureURLs       []string
	DefaultPictureURL string
	Addr              string
	Lat               string
	Lng               string
}
