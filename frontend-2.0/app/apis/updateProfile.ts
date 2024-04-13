'use server'
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const updateProfile = async ({userId, firstname, lastname, age, phone, skillOne, skillTwo, skillThree, aspiration, highestQual, home}: any) => {
    const res = await axios.post(`${BACKEND_URL}/user/update-profile`, {userId, firstname, lastname, age, phone, skillOne, skillTwo, skillThree, aspiration, highestQual, home});
    return {status: res.status, data: res.data };
}