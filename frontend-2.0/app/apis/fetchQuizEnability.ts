

'use server'
import { createClient } from "@supabase/supabase-js";

export const fetchEnability = async ({quizId, userId}: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const { data, error } = await supabase.from('Quiz_Scores').select('*').match({ quiz_id: quizId, user_id: userId });
    if (error) {
        return {status: 200, data: { message: 'Error fetching the latest quiz enability.' }};
    }
    if (data.length === 0) {
        return {status: 200, data: { value: true }};
    }
    return {status: 200, data: { value: false }};
}