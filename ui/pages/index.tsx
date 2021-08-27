import React from "react";
import { PostClient } from "../gen/pb/svc/post_pb_service";
import { GetPostReq } from "../gen/pb/svc/post_pb";
// import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";

var postService = new PostClient("http://0.0.0.0:50055");

export default function Home() {
  function getSomeThing() {
    var getPostReq = new GetPostReq();
    // getPostReq.setId("Hello");

    postService.getPost(getPostReq, function (err, res) {
      var post = res?.toObject();

      console.log(post);
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
      {/* <div ref={svgRef}>test</div> */}
    </div>
  );
}
