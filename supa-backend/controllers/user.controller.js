// User Controllers

import { supabase } from "../config/db.config.js";


export const updateProfile = async(req,res) => {
    const {userId, skills, age, highestQual, aspiration, phone, home} = req.body;
    try {
        const {data, error} = await supabase.from('User').update({
            firstname, lastname, age, skills, age, high_qual: highestQual, aspiration, phone, home
        }).match({id: userId});
        if(error){
            return res.status(200).send({message: "Error updating profile !"});
        }
        const resp = await supabase.from('User').select('*').match({id: userId});
        return res.status(200).send({message: 'Profile Updated Succesfully !', data: resp.data[0]});
    } catch (error) {
        return res.status(500).send(`Error: ${error.message}`);
    }
}

export const forgotPassword = async(req,res) => {
    const {userId, newPassword} = req.body;
    try {
        const {error} = await supabase.from('User').update({
            password: newPassword
        }).match({id: userId});
        if(error){
            return res.status(200).send({message: "Error updating password !"});
        }
        return res.status(200).send({message: 'Password Updated Succesfully !'});
    } catch (error) {
        return res.status(500).send(`Error: ${error.message}`);
    }
}

export const deleteAccount = async(req,res) => {
    const {userId} = req.body;
    try {
        const {error} = await supabase.from('Quiz_Scores').delete().match({user_id: userId});
        if(error){
            console.log("Error1", error)
            return res.status(200).send({message: "Error deleting account !"});
        }
        const second = await supabase.from('Leaderboard').delete().match({user_id: userId});
        if(second.error){
            console.log("Error2", error)
            return res.status(200).send({message: "Error deleting account !"});
        }
        const third = await supabase.from('User').delete().match({id: userId});
        if(third.error){
            console.log("Error3", error)
            return res.status(200).send({message: "Error deleting account !"});
        }
        return res.status(200).send({message: 'Account Succesfully deleted !'});
    } catch (error) {
        return res.status(500).send(`Error: ${error.message}`);
    }
}