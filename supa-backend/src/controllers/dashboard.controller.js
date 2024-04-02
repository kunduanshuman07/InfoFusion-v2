// All Dashboard controllers

import { supabase } from '../config/db.config.js';

export const fetchDashboardData = async (req, res) => {
    try {
        const {data, error} = await supabase.from('Quiz_Scores').select('*');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(`Error: ${error.mesage}`)
    }
}