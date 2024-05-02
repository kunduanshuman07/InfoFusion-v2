'use server'
import { createClient } from "@supabase/supabase-js";

export const addComment = async ({ user_id, username, post_id, comment }: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '')
    const { error } = await supabase.from('comments').insert([{
        user_id, comment, post_id, username
    }]);
    if (error) {
        return { status: 200, data: { message: "Error Adding comment" } };
    }
    const allComments = await supabase.from('comments').select('*');
    return { status: 200, data: { message: "Successfully added comment !", data: allComments.data } }
}

export const fetchAllPostComments = async () => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '')
    const {data, error} = await supabase.from('comments').select('*').order('created_at', { ascending: false });;
    if (error) {
        return { status: 200, data: { message: "Error Adding comment" } };
    }
    return { status: 200, data: { message: "Successfully added comment !", data: data } }
}