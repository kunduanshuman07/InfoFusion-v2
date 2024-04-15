'use server'
import { createClient } from "@supabase/supabase-js";
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const fetchUser = async ({ userId }: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const { data, error } = await supabase.from('User').select('*').match({ email: userId });
    if (error) {
        return { status: 200, data: { message: 'Error fetching user!' } };
    }
    if (!data || data.length === 0) {
        return { status: 400, data: { message: 'User doesnot exist!' } };
    }
    const user = data[0];
    return { status: 200, data: { message: 'User Fetched Successfully', user } };
}