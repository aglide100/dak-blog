import React, {useRef, useEffect} from "react";
import { Header, HeaderProps } from "../src/components/Header/Header";
// import { Footer } from "../src/components/Footer/Footer";
import type { AppProps } from "next/app";
import "../src/_css/common.css";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { useGetScroll, UseScrollHooksProps } from "../src/hooks";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const headerNode = useRef<HTMLDivElement>(null);

  const useScrollHooksProps: UseScrollHooksProps = {
    receivedRef: headerNode
  };

  const result = useGetScroll(useScrollHooksProps);

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
    ...result
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="just blog" />
      </Head>
      <div className="flex flex-col justify-between">
        <div ref={headerNode}>
          <Header {...headerProps}></Header>
        </div>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            key={router.pathname}
            className="w-screen flex justify-center mt-24 overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Component {...pageProps} key={router.pathname} />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* <div>
        <Footer></Footer>
      </div> */}
    </div>
  );
}

export default MyApp;
