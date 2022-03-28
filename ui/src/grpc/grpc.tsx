import * as PostService from "../../gen/pb/svc/post_pb_service";
// import {PostQueryPostsHeader } from "../../gen/pb/svc/post_pb_service.d"
import * as pb_unit_post from "../../gen/pb/unit/post/post_pb";
import * as pb_unit_postHeader from "../../gen/pb/unit/postHeader/postHeader_pb";
import * as pb_svc_post from "../../gen/pb/svc/post_pb";
import { grpc } from "@improbable-eng/grpc-web";


const USE_TLS= true

// console.log("tls: ", process.env.TLS)

const grpcHost = USE_TLS ? "https://localhost:10112" : "http://localhost:10112";

export function makeGetPostReq(postId: string) {
  const getPostReq = new pb_svc_post.GetPostReq();
  const post = new pb_unit_post.Post();
  const id = new pb_unit_post.ID();
  id.setUuid(postId);
  post.setId(id);
  getPostReq.setId(post);
  grpc.unary(PostService.Post.GetPost, {
    request: getPostReq,
    host: grpcHost,
    onEnd: (res) => {
      const { status, statusMessage, headers, message, trailers } = res;
      console.log("getPost.onEnd.status", status, statusMessage);
      console.log("getPost.onEnd.headers", headers);

      if (status === grpc.Code.OK && message) {
        console.log("getPost.onEnd.message", message.toObject());
      }

      console.log("getPost.onEnd.trailers", trailers);
    },
  });
}

export function queryPostHeaders() {
  const queryPostsHeaderReq = new pb_svc_post.QueryPostsHeaderReq()
  

  const client = grpc.client(PostService.Post.QueryPostsHeader, {
    host: grpcHost,
  });

  client.onHeaders((headers: grpc.Metadata) => {
    console.log("queryPosts.onHeaders", headers);
  })

  client.onMessage((message:any ) => {
    console.log("queryPosts.onMessage", message.toObject());
  })

  client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
    console.log("queryPosts.onEnd", code, msg, trailers);
  })

  client.start();
  client.send(queryPostsHeaderReq)

}

export function makeCreatePostReq(newPost: pb_unit_post.Post) {
  const creatPostReq = new pb_svc_post.CreatePostReq();
  creatPostReq.setPost(newPost);
  grpc.unary(PostService.Post.CreatePost, {
    request: creatPostReq,
    host: grpcHost,
    onEnd: (res) => {
      const { status, statusMessage, headers, message, trailers } = res;
      console.log("createPost.onEnd.status", status, statusMessage);
      console.log("createPost.onEnd.headers", headers);
      if (status === grpc.Code.OK && message) {
        console.log("createPost.onEnd.message", message.toObject());
      }

      console.log("createPost.onEnd.trailers", trailers);
    },
  });
}

export function makeDeletePostReq(postId: string) {
  const deletePostReq = new pb_svc_post.DeletePostReq();

  const post = new pb_unit_post.Post();
  const id = new pb_unit_post.ID();
  id.setUuid(postId);
  post.setId(id);

  deletePostReq.setId(post);
  grpc.unary(PostService.Post.DeletePost, {
    request: deletePostReq,
    host: grpcHost,
    onEnd: (res) => {
      const { status, statusMessage, headers, message, trailers } = res;
      console.log("deletePost.onEnd.status", status, statusMessage);
      console.log("deletePost.onEnd.headers", headers);
      if (status === grpc.Code.OK && message) {
        console.log("deletePost.onEnd.message", message.toObject());
      }

      console.log("deletePost.onEnd.trailers", trailers);
    },
  });
}
