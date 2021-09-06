package controllers

import (
	"context"
	"log"

	pb_svc "github.com/aglide100/dak-blog/pb/svc"
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
	return &pb_svc.GetPostRes{}, nil
}