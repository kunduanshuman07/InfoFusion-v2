'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchPastQuiz = async () => {
    const res = await axios.get(`${BACKEND_URL}/quiz/past-quizzes`);
    return {status: res.status, data: res.data };
}