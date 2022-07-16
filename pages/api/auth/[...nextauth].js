import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
          }),
    ],
    secret:'/hlX63+uTiHk1PNYNCGCxl4UkY01WljMP46jQFQE0YI=',
    callbacks:{
        async session(session,token){
            session.accessToken=token;
            return session
        },
    },
})