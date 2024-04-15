'use server'
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
export const addQuizQuestions = async ({quiz_id, question}: any) => {
    console.log(quiz_id, question);
    const {data, error} = await supabase.from('Questions').insert([
        {
            title: question.question,
            quiz_id: quiz_id,
            correct_answer: question.correctAnswer,
            category: question.category,
            options: question.options
        }
    ])
    console.log(error);
}
export const adminAddQuiz = async ({title, quiz_index, quiz_description, desc_link, quizData}: any) => {
    
    const { error } = await supabase.from('Quiz').insert([
        {
            title,
            quiz_description,
            desc_link
        }
    ])
    if (error) {
        return {status: 400, data: { message: 'Error creating new quiz' }};
    }
    const quizResp = await supabase.from('Quiz').select('*').order('created_at', {ascending: false}).limit(1);
    const quiz_id = quizResp?.data?.[0].id;
    return {status: 200, data: { message: 'Quiz succesfully created.', quizId:quiz_id }};
}
