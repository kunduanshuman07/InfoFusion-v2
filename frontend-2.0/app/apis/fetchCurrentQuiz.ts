'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchCurrentQuiz = async () => {
    const res = await axios.get(`${BACKEND_URL}/quiz/current-quiz`);
    return {status: res.status, data: res.data };
}