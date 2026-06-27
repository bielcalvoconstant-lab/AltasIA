import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@atlas/db";
import { isGlobalAdmin } from "@atlas/shared/permissions";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database",
  },
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: "[discord.com](https://discord.com/api/oauth2/authorize?scope=identify+email)",
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.isGlobalAdmin = isGlobalAdmin(user.email);
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      return !!user.email;
    },
  },
  pages: {
    signIn: "/login",
  },
});
