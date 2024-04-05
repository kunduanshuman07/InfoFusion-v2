'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchLeaderboard = async () => {
    const res = await axios.get(`${BACKEND_URL}/leaderboard/fetch-leaderboard`);
    return {status: res.status, data: res.data };
}