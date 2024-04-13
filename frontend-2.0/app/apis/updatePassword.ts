'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const updatePassword = async ({userId, newPassword}: any) => {
    const res = await axios.post(`${BACKEND_URL}/user/update-password`, {userId, newPassword});
    return {status: res.status, data: res.data };
}