import React from "react";
import Head from "next/head";
import {
  makeGetPostReq,
  makeCreatePostReq,
  queryPostHeaders,
} from "../src/grpc/grpc";
import * as pb_unit_post from "../gen/pb/unit/post/post_pb";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Helloooo!</div>
      <div
        onClick={(ev) => {
          ev.preventDefault();
          console.log("Call makeGetPostReq");
          makeGetPostReq("Hello!");
        }}
      >
        create GetPostReq
      </div>
      <div
        onClick={(ev) => {
          ev.preventDefault();
          console.log("Call makeCreateReq");
          const post = new pb_unit_post.Post();
          const postSpec = new pb_unit_post.Spec();
          postSpec.setAuthor("abc");
          postSpec.setTitle("test");
          makeCreatePostReq(post);
        }}
      >
        create CreatePostReq
      </div>

      <div
        onClick={(ev) => {
          ev.preventDefault();

          queryPostHeaders();
        }}
      >
        create QueryPostsHeadersReq
      </div>
    </div>
  );
}
