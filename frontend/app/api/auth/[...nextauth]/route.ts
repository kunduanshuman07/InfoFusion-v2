'use server'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import { loginUser } from "@/app/server-actions/loginUser";
import { createClient } from "@supabase/supabase-js"
const supabase = createClient(process.env.SUPABASE_URL||'undefined', process.env.SUPABASE_KEY||'undefined');
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
                const res = await supabase.from('User').select('*').match({ email: email});
                console.log(res);
                if (!res.data || res.data.length === 0){
                    return null;
                }
                if (res.data[0].password !== password){
                    return null;
                }
                return res.data[0];
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };