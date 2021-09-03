package main

import (
	"context"
	"log"
	"time"

	"google.golang.org/grpc"

	pb_svc "github.com/aglide100/dak-blog/pb/svc"
	"github.com/aglide100/dak-blog/pb/unit/post"
)

const (
	address = "0.0.0.0:50011"
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
	str := &post.ID{Uuid: "asdas"}
	id := &post.Post{Id : str }

	res, err := client.GetPost(ctx, &pb_svc.GetPostReq{Id : id})
	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
	}
	log.Printf("res %v", res)

}