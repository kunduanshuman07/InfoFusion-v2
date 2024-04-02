'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const submitQuiz = async({userId, quizId, quizData, selectedOptions}:any) => {
    const res = await axios.post(`${BACKEND_URL}/quiz/submit-quiz`, {userId, quizId, quizData, selectedOptions});
    return {status: res.status, data: res.data};
}