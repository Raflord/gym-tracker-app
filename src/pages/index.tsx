import type { NextPage } from "next";
import Head from "next/head";
import HomeScreen from "../components/screens/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gym Tracker App</title>
        <meta name="description" content="Gym tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen />
    </>
  );
};

export default Home;
