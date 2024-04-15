'use server'

import { createClient } from "@supabase/supabase-js";

export const updateProfile = async ({userId, firstname, lastname, age, phone, skillOne, skillTwo, skillThree, aspiration, highestQual, home}: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');
    const {data, error} = await supabase.from('User').update({
        firstname, lastname, age, skill_one: skillOne, skill_two: skillTwo, skill_three: skillThree, high_qual: highestQual, aspiration, phone, home
    }).match({id: userId});
    if(error){
        return {status: 200, data: {message: "Error updating profile !"}};
    }
    const resp = await supabase.from('User').select('*').match({id: userId});
    return {status: 200, data: {message: 'Profile Updated Succesfully !', user: resp.data?.[0]}};
}