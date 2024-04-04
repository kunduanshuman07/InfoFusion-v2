'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const submitQuiz = async({userId, quizId, quizData, selectedOptions, quizTitle, quizIndex, username}:any) => {
    console.log(userId, quizId, quizData, selectedOptions, quizTitle, quizIndex);
    const res = await axios.post(`${BACKEND_URL}/quiz/submit-quiz`, {userId, quizId, quizData, selectedOptions, quizTitle, quizIndex, username});
    return {status: res.status, data: res.data};
}