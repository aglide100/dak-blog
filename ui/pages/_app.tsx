import React from "react";
import { Header, HeaderProps } from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const headerProps: HeaderProps = {
    signIn: () => {
      router.push("/auth/login");
    },
    signUp: () => {
      alert("wip");
    },
    onClickGoToHome: () => {
      router.push("/");
    },
  };
  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="just blog" />
      </Head>
      <div>
        <Header {...headerProps}></Header>
        <div className="flex justify-center">
          <Component {...pageProps} />
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MyApp;
