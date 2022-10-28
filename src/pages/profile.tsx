import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

const Profile: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Gym Tracker App - Help</title>
        <meta name="description" content="Track your progress in the gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-auto max-w-xl p-4">
        <Navbar avatarUrl={session?.user?.image} signOutFn={signOut} />
      </header>
      <main className="mx-auto max-w-xl p-4">
        <h3 className="mb-4 text-center text-lg font-semibold">Profile</h3>
      </main>
    </>
  );
};

export default Profile;

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
