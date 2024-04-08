// All Dashboard controllers

import { supabase } from '../config/db.config.js';

export const fetchDashboardData = async (req, res) => {
    const {userId} = req.body;
    try {
        const {data, error} = await supabase.from('Leaderboard').select('*').match({user_id: userId});
        res.status(200).send({message: 'Successfully fetched Dashboard Data', data: data[0]});
    } catch (error) {
        res.status(500).send(`Error: ${error.mesage}`)
    }
}

export const fetchScorecards = async (req,res) => {
    const {userId} = req.body;
    try {
        const {data, error} = await supabase.from('Quiz_Scores').select('*').match({user_id: userId}).order('submission_time', {ascending: false});
        if(error){
            return res.status(200).send({message: 'Error fetching Scorecards'});
        }
        return res.status(200).send({message: 'Successfully fetched scorecards', data: data});
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
}

export const fetchFullScorecard = async (req,res) => {
    const {userId, quizId} = req.body;
    try {
        const {data, error} = await supabase.from('Quiz_Scores').select('*').match({user_id: userId, quiz_id: quizId});
        if(error){
            return res.status(200).send({message: 'Error fetching Scorecard'});
        }
        return res.status(200).send({message: 'Successfully fetched scorecard', data: data});
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
}