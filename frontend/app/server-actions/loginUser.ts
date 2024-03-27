'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const loginUser = async ({ username, password }: any) => {
    const {status, data} = await axios.post(`${BACKEND_URL}/auth/login`, { username, password });
    return {status, data};
}