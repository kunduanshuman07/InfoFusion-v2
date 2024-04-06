'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchQuiz = async ({quizId}: any) => {
    const res = await axios.post(`${BACKEND_URL}/quiz/past-quiz`, {quizId});
    return {status: res.status, data: res.data };
}