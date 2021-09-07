package controllers

import (
	"context"
	"errors"
	"log"

	pb_svc "github.com/aglide100/dak-blog/pb/svc"
	pb_unit_post "github.com/aglide100/dak-blog/pb/unit/post"
)

type PostServer struct {
	pb_svc.PostServer
}

func NewPostServiceController() *PostServer {
	return &PostServer{}
}

func (s *PostServer) GetPost(ctx context.Context, in *pb_svc.GetPostReq) (*pb_svc.GetPostRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.GetId().Id)
	}

	post := &pb_unit_post.Post{Spec: &pb_unit_post.Spec{
		Title: "test",
		Author: "author",
	}}
	return &pb_svc.GetPostRes{Post:post}, nil
}

func (s *PostServer) DeletePost(ctx context.Context, in *pb_svc.DeletePostReq) (*pb_svc.DeletePostRes, error) {
	log.Println("received DeletePost")

	if in == nil {
		return nil, errors.New("DeletePosReq is nil! please check request") 
	}

	return &pb_svc.DeletePostRes{}, nil
}

func (s *PostServer) CreatePost(ctx context.Context, in *pb_svc.CreatePostReq) (*pb_svc.CreatePostRes, error) {
	log.Println("received CreatePost")


	return &pb_svc.CreatePostRes{}, nil	
} 


func (s *PostServer) CreateComment(ctx context.Context, in *pb_svc.CreateCommentReq) (*pb_svc.CreateCommentRes, error) {
	log.Println("received CreateComment")

	return &pb_svc.CreateCommentRes{}, nil
}

func (s *PostServer) UpdatePost(ctx context.Context, in *pb_svc.UpdatePostReq) (*pb_svc.UpdatePostRes, error) {
	log.Println("received UpdatePost")

	return &pb_svc.UpdatePostRes{} ,nil
}