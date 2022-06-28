package servers

import (
	pb_svc "github.com/aglide100/dak-blog/pb/svc"
)

type CommentServer struct {
	pb_svc.CommentServer
}

func NewCommentServiceServer() *CommentServer {
	return &CommentServer{}
}

