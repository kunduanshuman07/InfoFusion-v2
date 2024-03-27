'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const registerUser = async ({ firstname, lastname, email, username, password }: any) => {
    const {status, data} = await axios.post(`${BACKEND_URL}/auth/register`, { firstname, lastname, email, username, password });
    return {status, data};
}