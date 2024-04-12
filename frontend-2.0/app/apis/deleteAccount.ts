'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const deleteAccount = async ({userId}: any) => {
    const res = await axios.post(`${BACKEND_URL}/user/delete-account`, {userId});
    return {status: res.status, data: res.data };
}