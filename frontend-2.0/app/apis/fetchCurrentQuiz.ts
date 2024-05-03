'use server'
import { createClient } from "@supabase/supabase-js";

export const fetchCurrentQuiz = async () => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const { data, error } = await supabase.from('Quiz').select('*')
        .order('created_at', { ascending: false })
        .limit(1);
    if (error) {
        return { status: 200, data: { message: 'Error fetching the latest quiz data.' } };
    }
    const questionResp = await supabase.from('Questions').select('*').match({ quiz_id: data[0].id }).order('category', { ascending: true });
    if (questionResp.error) {
        return { status: 200, data: { message: 'Error fetching the latest quiz data.' } };
    }
    return { status: 200, data: { message: 'Current quiz successfully fetched', quizId: data[0].id, quizTitle: data[0].title, quizIndex: data[0].quiz_index, quizDesc: data[0].quiz_description, descLink: data[0].desc_link, quizData: questionResp.data, } }
};

export const fetchQuiz = async({quizId}: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const { data, error } = await supabase.from('Quiz').select('*').match({id: quizId});
    if (error) {
        return { status: 200, data: { message: 'Error fetching the quiz data.' } };
    }
    const questionResp = await supabase.from('Questions').select('*').match({ quiz_id: data[0].id }).order('category', { ascending: true });
    if (questionResp.error) {
        return { status: 200, data: { message: 'Error fetching the latest quiz data.' } };
    }
    return { status: 200, data: { message: 'Current quiz successfully fetched', quizId: data[0].id, quizTitle: data[0].title, quizIndex: data[0].quiz_index, quizDesc: data[0].quiz_description, descLink: data[0].desc_link, quizData: questionResp.data, quizDate: data[0].created_at } }
}