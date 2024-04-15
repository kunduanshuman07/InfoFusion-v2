'use server'
import { createClient } from "@supabase/supabase-js";
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchScorecards = async ({ userId }: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

    const { data, error } = await supabase.from('Quiz_Scores').select('*').match({ user_id: userId }).order('submission_time', { ascending: false });
    if (error) {
        return { status: 200, data: { message: 'Error fetching Scorecards' } }
    };
    return {status:200, data: { message: 'Successfully fetched scorecards', data: data }};
}
