import React, { useRef, useEffect, useState } from "react";
import { select, utcParse } from "d3";
import Head from "next/head";

export default function Home() {
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
  }, []);

  return (
    <div>
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div ref={svgRef}>test</div>
    </div>
  );
}
