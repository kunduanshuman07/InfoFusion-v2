'use server'
import { createClient } from "@supabase/supabase-js";

export const fetchFullScorecard = async ({userId, quizId}: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const {data, error} = await supabase.from('Quiz_Scores').select('*').match({user_id: userId, quiz_id: quizId});
    if(error){
        return {status:200,data: {message: 'Error fetching Scorecard'}};
    }
    return {status:200, data: {message: 'Successfully fetched scorecard', data: data}};
}