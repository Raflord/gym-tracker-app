import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Card from "../components/Card";
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
      <header className="mx-auto max-w-xl p-4">
        <Navbar avatarUrl={session?.user?.image} signOutFn={signOut} />
      </header>
      <main className="mx-auto max-w-xl p-4">
        <h3 className="mb-4 text-center text-lg font-semibold">
          Aqui está o resumo do seu progresso
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <Card title="Peso" value={65.4} unit="kg" />
          <div className="col-span-2">Medidas:</div>
          <Card title="Ombro" value={120} unit="cm" />
          <Card title="Peito" value={105} unit="cm" />
          <Card title="Braco D" value={38} unit="cm" />
          <Card title="Braco E" value={38} unit="cm" />
          <Card title="Abdomen" value={81} unit="cm" />
          <Card title="Cintura" value={80} unit="cm" />
          <Card title="Perna D" value={53} unit="cm" />
          <Card title="Perna E" value={53} unit="cm" />
          <Card title="Panturrilha D" value={35.5} unit="cm" />
          <Card title="Panturrilha E" value={36.5} unit="cm" />
        </div>
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
