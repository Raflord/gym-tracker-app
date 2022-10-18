import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

const Dashboard: NextPage = () => {
  const route = useRouter();
  const session = useSession();

  return (
    <>
      <Head>
        <title>Gym Tracker App - Dashboard</title>
        <meta name="description" content="Track your progress in the gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex flex-col items-center justify-center p-4">
        <div>Hello! {session?.data?.user?.name}</div>
        <div>you are logged in</div>
        <button
          className="bg-blue-500"
          onClick={() => {
            signOut();
            route.push("/");
          }}
        >
          logout
        </button>
      </main>
    </>
  );
};

export default Dashboard;

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
