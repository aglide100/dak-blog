import React from "react";
import { PostClient } from "../gen/pb/svc/post_grpc_web_pb";
import { GetPostReq } from "../gen/pb/svc/post_pb";
// import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  function getSomeThing() {
    var postService = new PostClient("http://like-a-junk.com:9901");
    var getPostReq = new GetPostReq();

    var metadata = { "custom-header-1": "value1" };
    postService.getPost(getPostReq, metadata, function (err, response) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(response.getPost);
      }
    });
    // const postService = new PostServiceClient
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
