import React from "react";
import { Post } from "../gen/pb/svc/post_pb_service";
import * as pb_unit_post_post_pb from "../gen/pb/unit/post/post_pb";
import { GetPostReq } from "../gen/pb/svc/post_pb";
import Head from "next/head";
import { grpc } from "@improbable-eng/grpc-web";

export default function Home() {
  function getSomeThing() {
    const getPostReq = new GetPostReq();
    const post = new pb_unit_post_post_pb.Post();
    const id = new pb_unit_post_post_pb.ID();
    id.setUuid("Hello!!!!");
    post.setId(id);
    getPostReq.setId(post);
    grpc.unary(Post.GetPost, {
      request: getPostReq,
      host: "https://localhost:8089",
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

  return (
    <div>
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Helloooo!</div>
      <div onClick={() => getSomeThing()}>test axios</div>
    </div>
  );
}
