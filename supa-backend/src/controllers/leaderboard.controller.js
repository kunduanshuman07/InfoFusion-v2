// All Leaderboard controllers

import { supabase } from '../config/db.config.js';


export const fetchLeaderboard = async(req,res) => {
    try {
        
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
}