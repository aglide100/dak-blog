import React from "react";
// import React, { useRef, useEffect, useState } from "react";
// import { select, utcParse } from "d3";
import Head from "next/head";

export default function Home() {
  // const svgRef = useRef();
  // useEffect(() => {
  //   const svg = select(svgRef.current);
  // }, []);

  function getSomeThing() {
    const grpc = require("grpc");
    const protoLoader = require("@grpc/proto-loader");

    const PROTO_PATH = "";
    const SERVER_URI = "0.0.0.0:8888/api";

    // axios.get("https://dak-blog.live/api/test").then((res) => {
    //   const data = res.data;
    //   alert(data);
    // });
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
