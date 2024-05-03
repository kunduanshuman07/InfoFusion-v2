'use server'
import { createClient } from "@supabase/supabase-js";

export const deleteAccount = async ({userId}: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL||'', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'')
    const {error} = await supabase.from('Quiz_Scores').delete().match({user_id: userId});
        if(error){
            return {status: 200, data:{message: "Error deleting account !"}};
        }
        const second = await supabase.from('Leaderboard').delete().match({user_id: userId});
        if(second.error){
            return {status: 200, data:{message: "Error deleting account !"}};
        }
        const third = await supabase.from('User').delete().match({id: userId});
        if(third.error){
            return {status: 200, data:{message:  "Error deleting account !"}}
        }
        return {status: 200, data:{message: "Successfully deleted account !"} }
}