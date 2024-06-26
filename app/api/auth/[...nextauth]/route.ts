import prisma from "@/app/db/prismadb";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "text@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // console.log(credentials);
        const email = credentials?.email;
        const password = credentials?.password;
        try {
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });
          const verify = await bcrypt.compare(
            password || "",
            user?.hashedPassword || ""
          );
          // console.log(user, verify);
          if (verify) {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
