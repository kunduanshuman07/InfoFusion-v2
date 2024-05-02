'use server'
import { createClient } from "@supabase/supabase-js";

export const fetchCommunityPosts = async () => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '')
    const { data, error } = await supabase.from('community_posts').select('*');
    if (error) {
        return { status: 200, data: { message: "Error fetching Posts" } };
    }
    return { status: 200, data: { message: "Successfully fetched Posts !", data: data } }
}