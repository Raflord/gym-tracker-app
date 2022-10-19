import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

const Login: NextPage = () => {
  const router = useRouter();
  const sesssion = useSession();

  if (sesssion.status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <>
      <Head>
        <title>Gym Tracker App - Login</title>
        <meta name="description" content="Track your progress in the gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen flex-col items-center justify-center gap-y-11 bg-neutral-400 bg-dumbell bg-cover bg-center p-4 bg-blend-multiply">
        <h1 className=" text-5xl font-extrabold sm:text-6xl sm:tracking-wider">
          Login
        </h1>
        <div className="w-full max-w-xl rounded-xl border-2 border-neutral-50 bg-black/50 p-10 backdrop-blur-sm">
          <div className="flex flex-col gap-y-3">
            <button
              className="rounded-lg bg-gray-800 p-3 text-xl duration-300 hover:bg-gray-600"
              onClick={() => {
                signIn("google");
              }}
            >
              Login com Google
            </button>
            <button
              className="rounded-lg bg-gray-800 p-3 text-xl duration-300 hover:bg-gray-600"
              onClick={() => {
                signIn("discord");
              }}
            >
              Login com Discord
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;

// get session from server redirect the user
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
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
