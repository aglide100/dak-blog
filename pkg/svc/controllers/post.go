package controllers

import (
	"context"
	"log"

	pb_svc "github.com/aglide100/dak-blog/pb/svc"
)

type PostService struct {
	pb_svc.PostServer
}

func NewPostServiceController() *PostService {
	return &PostService{}
}

func (hdl *PostService) GetPost(ctx context.Context, in *pb_svc.GetPostReq) (*pb_svc.GetPostRes, error) {
	log.Printf("Received: %v", in.GetId().Id)
	return &pb_svc.GetPostRes{}, nil
}