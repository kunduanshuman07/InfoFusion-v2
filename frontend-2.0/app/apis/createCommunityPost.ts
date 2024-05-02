'use server'
import { createClient } from "@supabase/supabase-js";

export const createCommunityPost = async ({ user_id, title,username,  content, code, tag_one, tag_two }: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '')
    const { error } = await supabase.from('community_posts').insert([{
        user_id, title, content, code, tag_one, tag_two, username, upvotes: 0,
    }]);
    if (error) {
        return { status: 200, data: { message: "Error creating Post" } };
    }
    return { status: 200, data: { message: "Successfully created Post !" } }
}