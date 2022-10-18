import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Gym Tracker App</title>
        <meta name="description" content="Track your progress in the gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen flex-col items-center justify-center gap-y-11 bg-neutral-500 bg-barbell2 bg-cover bg-center bg-no-repeat p-4 bg-blend-multiply">
        <h3 className="text-lg font-bold uppercase tracking-widest">
          Bem vindo ao
        </h3>
        <h1 className="text-outline text-5xl font-extrabold sm:text-6xl sm:tracking-wider md:text-8xl">
          Gym Tracker
        </h1>
        <p className="w-full max-w-2xl text-center text-xl leading-8 tracking-wide md:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          maxime quidem at, a earum molestias alias cupiditate? Ab deleniti
          reprehenderit quisquam, quas doloremque quod in, accusantium magni
          natus eius magnam.
        </p>
        <button
          className="flex items-center gap-x-2 rounded-full border-4 border-neutral-500 px-5 py-3 text-xl tracking-wide duration-300 hover:border-neutral-50 md:text-2xl"
          onClick={() => {
            router.push("/login");
          }}
        >
          Comece Agora{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mt-1 h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </main>
    </>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (
//   ctx: GetServerSidePropsContext
// ) => {
//   const session = await getServerAuthSession(ctx);

//   if (session) {
//     return {
//       redirect: {
//         destination: "/dashboard",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// };
