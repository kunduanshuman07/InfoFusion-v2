'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchDashboard = async ({userId}: any) => {
    const res = await axios.post(`${BACKEND_URL}/dashboard/user-dashboard`, {userId});
    return {status: res.status, data: res.data };
}