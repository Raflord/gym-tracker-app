import type { NextPage } from "next";
import { signIn } from "next-auth/react";

const LoginScreen: NextPage = () => {
  return (
    <>
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

export default LoginScreen;
