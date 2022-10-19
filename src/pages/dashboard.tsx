import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import PopoverComponent from "../components/Popover";
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
      <main className="mx-auto max-w-4xl p-4">
        <div className="flex items-center py-2">
          <PopoverComponent
            avatarUrl={session?.user?.image}
            signOutFn={signOut}
          />
          <div className="text-lg">Bem vindo! {session?.user?.name}</div>
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input type="number" name="weight" id="weight" placeholder="kg" />
        </div>
      </main>
    </>
  );
};

export default Dashboard;

// get session from server redirect the user
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
