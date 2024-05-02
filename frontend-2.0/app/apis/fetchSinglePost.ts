'use server'
import { createClient } from "@supabase/supabase-js";

export const fetchSinglePost = async ({id}: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '')
    const { data, error } = await supabase.from('community_posts').select('*').match({id: id});
    if (error) {
        return { status: 200, data: { message: "Error fetching Post" } };
    }
    return { status: 200, data: { message: "Successfully fetched Post !", data: data[0] } }
}