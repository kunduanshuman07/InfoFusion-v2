'use server'
import { createClient } from "@supabase/supabase-js";

export const userQuizzes = async ({user_id}: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '')
    const { data, error } = await supabase.from('Quiz_Scores').select('*').match({user_id: user_id});
    if (error) {
        return { status: 200, data: { message: "Error fetching User Quizzes" } };
    }
    return { status: 200, data: { message: "Successfully fetched User Quizzes!", data: data } }
}