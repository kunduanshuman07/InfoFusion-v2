'use server'
import { createClient } from "@supabase/supabase-js";
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const registerUser = async ({ email, username, password }: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const { error } = await supabase.from('User').insert([{
        username, email, password
    }]);
    if (error) {
        return {status: 200, data: {message: "Uniqueness"}};
    }
    const { data } = await supabase.from('User').select('*').match({ email: email });
    const leaderboardResp = await supabase.from('Leaderboard').insert([
        {
            user_id: data?.[0].id,
            rating: 0,
            questions: 0,
            correct_answers: 0,
            easy: 0,
            med: 0,
            hard: 0,
            misc: 0,
            username: data?.[0].username,
            quiz_count: 0,
            rating_graph: [0],
            highest_score: 0
        }
    ])
    if (leaderboardResp.error) {
        return {status: 400, data: {message: "Error setting the leaderboard!"}};
    }
    return {status: 200, data: { message: 'User Registered Succesfully', user: data?.[0] }};
}