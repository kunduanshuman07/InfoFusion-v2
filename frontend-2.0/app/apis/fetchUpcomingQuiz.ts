'use server'
import { createClient } from "@supabase/supabase-js";
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchUpcomingQuiz = async () => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const { data, error } = await supabase.from('upcoming_quizzes').select('*');
    if (error) {
        return { status: 200, data: { message: "Error fetching past quizzes!" } }
    };
    return { status: 200, data: { message: "Successfully fetched Past Quizzes!", data: data } };
}