"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import prisma from "../db/prismadb";
import axios from "axios";

export default function ProfilePage() {
  const router = useRouter();
  const session = useSession();
  const userImage = session.data?.user?.image;
  const [username, setUsername] = useState(session.data?.user?.name || "");

  if (session.status === "unauthenticated") {
    router.push("/login");
  }
  console.log(username);
  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user = await axios.put("/api/profile", {
      data: {
        username,
      },
    });
  }

  return (
    <>
      <section>
        {/* <div>{JSON.stringify(session)}</div> */}
        <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
        <form
          className="max-w-md mx-auto flex justify-center pb-32 "
          onSubmit={handleFormSubmit}
        >
          <div className="flex gap-2 items-center">
            <div>
              <Image
                src={userImage || "/google.png"}
                alt="avatar"
                height={80}
                width={80}
                className="rounded-full"
              ></Image>
            </div>
            <div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Name"
              ></input>
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
