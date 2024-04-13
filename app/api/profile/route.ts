import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";
import prisma from "@/app/db/prismadb";

export async function PUT(req: Request) {
  const body = await req.json(); // Accessing request body
  console.log(body);
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  console.log(email);
  //   if (!email) {
  //     return Response.json({ error: "User not authenticated" });
  //   }

  try {
    const res = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: body.data.username,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  return Response.json({ success: true }); // Sending JSON response
}
