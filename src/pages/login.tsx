import type { NextPage } from "next";
import Head from "next/head";
import LoginScreen from "./../components/screens/Login";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gym Tracker App - Login</title>
        <meta name="description" content="Gym tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginScreen />
    </>
  );
};

export default Login;
