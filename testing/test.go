package testing

// package main

// import (
// 	"context"
// 	"log"
// 	"time"

// 	"google.golang.org/grpc"

// 	pb_svc "github.com/aglide100/dak-blog/pb/svc"
// 	"github.com/aglide100/dak-blog/pb/unit/post"
// )

// const (
// 	address = "0.0.0.0:50011"
// )

// func main() {
// 	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
// 	if err != nil {
// 		log.Fatalf("can't connect grpc server %v", err)
// 	}
// 	defer conn.Close()
// 	client := pb_svc.NewPostClient(conn)

// 	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
// 	defer cancel()
// 	str := &post.ID{Uuid: "asdas"}
// 	id := &post.Post{Id : str }

// 	res, err := client.GetPost(ctx, &pb_svc.GetPostReq{Id : id})
// 	if err != nil {
// 		log.Fatalf("Can't receive anything! %v", err)
// 	}
// 	log.Printf("res %v", res)

// }

import (
	pb_unit_postHeader "github.com/aglide100/dak-blog/pb/unit/postHeader"
)

// func getMockPostHeaders() []*pb_unit_postHeader.PostHeader {
// 	return PostHeaders
// }

var PostHeaders = []*pb_unit_postHeader.PostHeader{
	{
		Id: &pb_unit_postHeader.ID{
			Uuid: "1",
		},
		Spec: &pb_unit_postHeader.Spec{
			Title:       "hello",
			Author:      "",
			Url:         "",
			Category:    "",
			WrittenDate: "",
		},
	},
	{
		Id: &pb_unit_postHeader.ID{
			Uuid: "2",
		},
		Spec: &pb_unit_postHeader.Spec{
			Title:       "world",
			Author:      "",
			Url:         "",
			Category:    "",
			WrittenDate: "",
		},
	},
	{
		Id: &pb_unit_postHeader.ID{
			Uuid: "3",
		},
		Spec: &pb_unit_postHeader.Spec{
			Title:       "hello",
			Author:      "",
			Url:         "",
			Category:    "",
			WrittenDate: "",
		},
	},
	{
		Id: &pb_unit_postHeader.ID{
			Uuid: "4",
		},
		Spec: &pb_unit_postHeader.Spec{
			Title:       "world",
			Author:      "",
			Url:         "",
			Category:    "",
			WrittenDate: "",
		},
	},
	{
		Id: &pb_unit_postHeader.ID{
			Uuid: "5",
		},
		Spec: &pb_unit_postHeader.Spec{
			Title:       "hello",
			Author:      "",
			Url:         "",
			Category:    "",
			WrittenDate: "",
		},
	},
	{
		Id: &pb_unit_postHeader.ID{
			Uuid: "6",
		},
		Spec: &pb_unit_postHeader.Spec{
			Title:       "world",
			Author:      "",
			Url:         "",
			Category:    "",
			WrittenDate: "",
		},
	},
	{
		Id: &pb_unit_postHeader.ID{
			Uuid: "7",
		},
		Spec: &pb_unit_postHeader.Spec{
			Title:       "hello",
			Author:      "",
			Url:         "",
			Category:    "",
			WrittenDate: "",
		},
	},
	{
		Id: &pb_unit_postHeader.ID{
			Uuid: "8",
		},
		Spec: &pb_unit_postHeader.Spec{
			Title:       "world",
			Author:      "",
			Url:         "",
			Category:    "",
			WrittenDate: "",
		},
	},
}
