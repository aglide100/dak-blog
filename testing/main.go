package main

import (
	"context"
	"log"
	"time"

	"google.golang.org/grpc"

	pb_svc "github.com/aglide100/dak-blog/pb/svc"
	pb_unit_post "github.com/aglide100/dak-blog/pb/unit/post"
)

const (
	address = "0.0.0.0:50055"
)

func main() {
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server %v", err)
	}
	defer conn.Close()
	client := pb_svc.NewPostClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	res, err := client.GetPost(ctx, &pb_svc.GetPostReq{Id : pb_unit_post.ID{uuid:""}})
	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
	}
	log.Printf("res %v", res)

}