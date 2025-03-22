import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { saltAndHashPassword } from "@/utils/password";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const pwHash = saltAndHashPassword(credentials.password);
        user = await (credentials.email, pwHash);
        if (!user) {
          throw new Error("No user found");
        }
        return user;
      },
    }),
  ],
});
