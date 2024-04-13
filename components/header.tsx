"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  const { data: session, status } = useSession();
  console.log(session);
  const user = session?.user?.name || session?.user?.email;
  return (
    <div>
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-400 font-semibold">
          <Link className="text-primary font-semibold text-2xl " href="">
            ST PIZZA
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {session ? (
            <div className="flex items-center gap-4 ">
              <Link href={"/profile"}>{user}</Link>
              <button
                className="bg-primary rounded-full text-white px-4 py-2"
                onClick={() => {
                  signOut({ callbackUrl: "/login" });
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                className="rounded-full text-gray-500 px-4 py-2 font-semibold"
                href={"/login"}
              >
                Login
              </Link>
              <Link
                className="bg-primary rounded-full text-white px-4 py-2"
                href={"/register"}
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}
