'use server'
import { createClient } from "@supabase/supabase-js";
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchDashboard = async ({ userId }: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const { data, error } = await supabase.from('Leaderboard').select('*').match({ user_id: userId });
    return {status:200,data: { message: 'Successfully fetched Dashboard Data', data: data?.[0] }};
}