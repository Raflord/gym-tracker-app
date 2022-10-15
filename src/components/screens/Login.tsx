import type { NextPage } from "next";
import { signIn } from "next-auth/react";

const LoginScreen: NextPage = () => {
  return (
    <>
      <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-y-11 p-4">
        <h1 className=" text-5xl font-extrabold text-[#7B7B8F] sm:text-6xl sm:tracking-wider">
          Sign up
        </h1>
        <div className="w-full rounded-xl border-2 border-[#7B7B8F] p-10">
          <div className="flex flex-col gap-y-3">
            <button
              className="rounded-lg bg-gray-800 p-3 text-xl duration-300 hover:bg-gray-600"
              onClick={() => {
                signIn("google");
              }}
            >
              Continue com Google
            </button>
            <button
              className="rounded-lg bg-gray-800 p-3 text-xl duration-300 hover:bg-gray-600"
              onClick={() => {
                signIn("discord");
              }}
            >
              Continue com Discord
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginScreen;
