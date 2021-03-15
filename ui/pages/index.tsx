import React from "react";
// import React, { useRef, useEffect, useState } from "react";
// import { select, utcParse } from "d3";
import Head from "next/head";
import axios from "axios";

export default function Home() {
  // const svgRef = useRef();
  // useEffect(() => {
  //   const svg = select(svgRef.current);
  // }, []);

  function getSomeThing() {
    axios.get("127.0.0.1:8888").then((res) => {
      const data = res.data;
      alert(data);
    });
  }

  return (
    <div>
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Helloooo!</div>
      <div onClick={getSomeThing}>test axios</div>
      {/* <div ref={svgRef}>test</div> */}
    </div>
  );
}
