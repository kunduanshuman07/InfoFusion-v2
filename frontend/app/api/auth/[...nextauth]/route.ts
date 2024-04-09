'use server'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { loginUser } from "@/app/server-actions/loginUser";
const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter your email" },
                password: { label: "Password", type: "text", placeholder: "Enter your Password" }
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;
                if(!email || !password){
                    return null;
                }
                const res = await loginUser({username: email, password});
                console.log(res);
                if(res?.data?.user?.password===password){
                    return res.data.user;
                }
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };