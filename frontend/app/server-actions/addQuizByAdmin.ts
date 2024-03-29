'use server'
import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const addQuizByAdmin = async({quizTitle, quizData}: any) => {
    await axios.post(`${BACKEND_URL}/quiz/add-quiz-admin`, {quizTitle, quizData});
}