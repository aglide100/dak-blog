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
    <div className="flex flex-col justify-between h-screen">
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
