package models

type File struct {
	Name string `validate:"required"`
	Path string `validate:"required"`
	// sha string
	// size int64
	Url     string
	Dir     bool
	Content string
}
