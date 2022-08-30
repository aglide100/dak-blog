package servers

import (
	"context"
	"errors"
	"log"

	"github.com/aglide100/dak-blog/pb/svc"
	pb_svc "github.com/aglide100/dak-blog/pb/svc"
	pb_unit_post "github.com/aglide100/dak-blog/pb/unit/post"
	"github.com/aglide100/dak-blog/pkg/db"
	"github.com/aglide100/dak-blog/testing"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

type PostServer struct {
	db *db.Database
	pb_svc.PostServer
}

func NewPostServiceServer(db *db.Database) *PostServer {
	return &PostServer{db: db}
}

func (s *PostServer) GetPost(ctx context.Context, in *pb_svc.GetPostReq) (*pb_svc.GetPostRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.GetId().Id)
	}

	err := grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	if err != nil {
		return nil, err
	}

	err = grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))
	if err != nil {
		return nil, err
	}

	post := &pb_unit_post.Post{Spec: &pb_unit_post.Spec{
		Title:  "test",
		Author: "author",
	}}

	return &pb_svc.GetPostRes{Post: post}, nil
}

func (s *PostServer) DeletePost(ctx context.Context, in *pb_svc.DeletePostReq) (*pb_svc.DeletePostRes, error) {
	log.Println("received DeletePost")

	err := grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	if err != nil {
		return nil, err
	}

	err = grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))
	if err != nil {
		return nil, err
	}

	if in == nil {
		return nil, errors.New("DeletePosReq is nil! please check request")
	}

	return &pb_svc.DeletePostRes{}, nil
}

func (s *PostServer) CreatePost(ctx context.Context, in *pb_svc.CreatePostReq) (*pb_svc.CreatePostRes, error) {
	log.Println("received CreatePost")

	err := grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	if err != nil {
		return nil, err
	}

	err = grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))
	if err != nil {
		return nil, err
	}

	return &pb_svc.CreatePostRes{}, nil
}

func (s *PostServer) CreateComment(ctx context.Context, in *pb_svc.CreateCommentReq) (*pb_svc.CreateCommentRes, error) {
	log.Println("received CreateComment")

	err := grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	if err != nil {
		return nil, err
	}

	err = grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))
	if err != nil {
		return nil, err
	}

	return &pb_svc.CreateCommentRes{}, nil
}

func (s *PostServer) UpdatePost(ctx context.Context, in *pb_svc.UpdatePostReq) (*pb_svc.UpdatePostRes, error) {
	log.Println("received UpdatePost")

	err := grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	if err != nil {
		return nil, err
	}

	err = grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))
	if err != nil {
		return nil, err
	}

	return &pb_svc.UpdatePostRes{}, nil
}

func (s *PostServer) QueryPostsHeader(in *svc.QueryPostsHeaderReq, stream pb_svc.Post_QueryPostsHeaderServer) error {
	err := stream.SendHeader(metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-stream"))
	if err != nil {
		return err
	}

	for _, postHeaders := range testing.PostHeaders {
		err = stream.Send(postHeaders)
		if err != nil {
			return err
		}
	}

	stream.SetTrailer(metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-stream"))
	return nil
}