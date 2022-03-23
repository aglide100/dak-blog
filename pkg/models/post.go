package models

import (
	pb_unit_post "github.com/aglide100/dak-blog/pb/unit/post"
)

func GithubFileToPost(file *File) (*pb_unit_post.Post, error) {

	post := &pb_unit_post.Post{Spec: &pb_unit_post.Spec{
		Title: file.Name,
		Author: "aglide100@gmail.com",
		WrittenDate: "",
		Content: file.Content,
		Thumbnail: "",
		Category: "Parent",
		Url: file.Url,
	}}

	return post, nil
}