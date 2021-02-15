import React from "react";
import { Header } from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
// import type { AppProps } from "next/app";
import "../styles/globals.css";

// type MyAppProps = {
//   myAppProps: AppProps;
// };

function MyApp() {
  // const { Component, pageProps } = props.myAppProps;

  return (
    <div>
      <Header></Header>
      Hello!
      <Footer></Footer>
    </div>
  );
  // return <Component {...pageProps} />
}

export default MyApp;
