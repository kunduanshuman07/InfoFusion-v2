'use server'
import { createClient } from "@supabase/supabase-js";

export const adminFetch = async () => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '')
    const { data, error } = await supabase.from('User').select('*');
    if (error) {
        return { status: 400, data: { message: "Error fetching Users !" } };
    }
    return { status: 200, data: { message: "Successfully fetched users !", users: data } }
}