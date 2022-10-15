import type { NextPage } from "next";

const HomeScreen: NextPage = () => {
  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-y-11 p-4">
        <h3 className="text-lg font-bold uppercase tracking-widest">
          Bem vindo
        </h3>
        <h1 className=" text-5xl font-extrabold text-[#7B7B8F] sm:text-6xl sm:tracking-wider md:text-8xl">
          Gym Tracker
        </h1>
        <p className="w-full max-w-2xl text-center text-lg font-normal leading-8 tracking-wide text-[#7B7B8F] md:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          maxime quidem at, a earum molestias alias cupiditate? Ab deleniti
          reprehenderit quisquam, quas doloremque quod in, accusantium magni
          natus eius magnam.
        </p>
        <button className="flex items-center gap-x-2 rounded-full border-4 border-[#7B7B8F] px-5 py-3 text-xl tracking-wide duration-300 hover:border-neutral-50 md:text-2xl">
          Comece Agora{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
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

export default HomeScreen;
