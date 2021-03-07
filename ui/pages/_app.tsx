import React from "react";
import { Header, HeaderProps } from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const headerProps: HeaderProps = {
    signIn: () => {
      alert("wip");
    },
    signUp: () => {
      alert("wip");
    },
    onClickGoToHome: () => {
      router.push("/");
    },
  };
  return (
    <div className="flex flex-col h-screen">
      <Header {...headerProps}></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
