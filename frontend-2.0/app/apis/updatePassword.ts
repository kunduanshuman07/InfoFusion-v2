'use server'

import { createClient } from "@supabase/supabase-js";


export const updatePassword = async ({ userId, newPassword }: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const { error } = await supabase.from('User').update({
        password: newPassword
    }).match({ email: userId });
    if (error) {
        return { status: 200, data: { message: "Error updating password !" } }
    }
    return { status: 200, data: { message: 'Password Updated Succesfully !' } };
}