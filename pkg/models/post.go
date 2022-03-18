package models

import (
	
	pb_unit_post "github.com/aglide100/dak-blog/pb/unit/post"
)

func GithubFileToPost(*file File) (*pb_unit_post, error) {

	post := &pb_unit_post.Post{Spec: &pb_unit_post.Spec{

	}}

	return post, nil
}