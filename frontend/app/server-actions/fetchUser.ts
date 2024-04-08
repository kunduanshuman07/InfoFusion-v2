'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const fetchUser = async ({ userId }: any) => {
    const {status, data} = await axios.post(`${BACKEND_URL}/auth/user-fetch`, { userId });
    return {status, data};
}