"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
    setLoading(false);
  }

  return (
    <section className="mt-28 h-[50vh]">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          disabled={loading}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          disabled={loading}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button disabled={loading} type="submit" className="submit">
          {loading ? "Loading..." : "Submit"}
        </button>
        <div className="my-4 text-center text-gray-500">
          or Login with provider?
        </div>
        <button
          className="flex items-center justify-center"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image
            src={"/google.png"}
            alt="google logo"
            height={24}
            width={24}
            className="mr-4"
          ></Image>
          Login with google
        </button>
      </form>
      <div className="text-center border-t pt-4 w-fit mx-auto mt-4">
        Don't have an Account?{" "}
        <Link href={"/register"} className="underline  hover:text-green-500">
          Register
        </Link>
      </div>
    </section>
  );
}
