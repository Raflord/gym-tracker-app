import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Gym Tracker App - Dashboard</title>
        <meta name="description" content="Track your progress in the gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-xl p-4">
        <Navbar avatarUrl={session?.user?.image} signOutFn={signOut} />
      </main>
    </>
  );
};

export default Dashboard;

// get session from server and redirect the user
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
