import prisma from "@/app/db/prismadb";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = body.email;
  const password = body.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newuser = await prisma.user.create({
      data: {
        email: email,
        hashedPassword: hashedPassword,
      },
    });
    return Response.json({ newuser });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error While Signing Up" });
  }
}
