'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchFullScorecard = async ({userId, quizId}: any) => {
    const res = await axios.post(`${BACKEND_URL}/dashboard/scorecard`, {userId, quizId});
    return {status: res.status, data: res.data };
}