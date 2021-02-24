import React from "react";
import { Header } from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
