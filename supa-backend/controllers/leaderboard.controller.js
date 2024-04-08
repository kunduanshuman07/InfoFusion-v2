// All Leaderboard controllers

import { supabase } from '../config/db.config.js';


export const fetchLeaderboard = async(req,res) => {
    try {
        const {data, error} = await supabase.from('Leaderboard').select('*').order('rating', {ascending: false});
        res.status(200).send({message: "Successfully fetched Leaderboard.", data: data});
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
}