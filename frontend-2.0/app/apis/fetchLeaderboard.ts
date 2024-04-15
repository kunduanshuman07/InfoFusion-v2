'use server'
import { createClient } from "@supabase/supabase-js";

export const fetchLeaderboard = async () => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const { data, error } = await supabase.from('Leaderboard').select('*').order('rating', { ascending: false });
    return {status:200, data: { message: "Successfully fetched Leaderboard.", data: data }};
}