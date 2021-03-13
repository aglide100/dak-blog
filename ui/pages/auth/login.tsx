import React from "react";
import Head from "next/head";
import { LoginForm } from "../../src/components/auth/LoginForm/LoginForm";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm></LoginForm>
    </div>
  );
}
