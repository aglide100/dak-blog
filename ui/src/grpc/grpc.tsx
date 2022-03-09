import { Post } from "../../gen/pb/svc/post_pb_service";
import * as pb_unit_post from "../../gen/pb/unit/post/post_pb";
import * as pb_svc_post from "../../gen/pb/svc/post_pb";
import { grpc } from "@improbable-eng/grpc-web";

const grpcHost = "https://localhost:10112";

export function makeGetPostReq(postId: string) {
  const getPostReq = new pb_svc_post.GetPostReq();
  const post = new pb_unit_post.Post();
  const id = new pb_unit_post.ID();
  id.setUuid(postId);
  post.setId(id);
  getPostReq.setId(post);
  grpc.unary(Post.GetPost, {
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

export function makeCreatePostReq(newPost: pb_unit_post.Post) {
  const creatPostReq = new pb_svc_post.CreatePostReq();
  creatPostReq.setPost(newPost);
  grpc.unary(Post.CreatePost, {
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
  grpc.unary(Post.DeletePost, {
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
