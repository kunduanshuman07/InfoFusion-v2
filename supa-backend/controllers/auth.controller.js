// User Authentication

import { supabase } from "../config/db.config.js";
import { logError, logSuccess } from "../logger.js"

export const login = async (req, res) => {
    const { username, password } = req.body;
    const apiName = 'login';
    try {
        const { data, error } = await supabase.from('User').select('*').match({ email: username });

        if (error) {
            logError(apiName, error.message);
            return res.status(400).send(`Error: ${error.message}`);
        }

        if (!data || data.length === 0) {
            logError(apiName, { message: "User does not exist" });
            return res.status(200).send({ message: 'User does not exist' });
        }

        const user = data[0];

        if (user.password !== password) {
            logError(apiName, { message: "Incorrect Password" });
            return res.status(200).send({ message: 'Incorrect Password' });
        }
        logSuccess(apiName);
        return res.status(200).send({ message: 'User Logged In Successfully', user });
    } catch (error) {
        return res.status(500).send(`Error: ${error.message}`);
    }
};


export const register = async (req, res) => {
    const { username, email, password } = req.body;
    const apiName = 'register';
    try {
        const { error } = await supabase.from('User').insert([{
            username, email, password
        }]);
        if (error) {
            logError(apiName, error.message);
            res.status(200).send({message: "Uniqueness"});
        }
        const { data } = await supabase.from('User').select('*').match({ email: email });
        const leaderboardResp = await supabase.from('Leaderboard').insert([
            {
                user_id: data[0].id,
                rating: 0,
                questions: 0,
                correct_answers: 0,
                easy: 0,
                med: 0,
                hard: 0,
                misc: 0,
                username: data[0].username,
                quiz_count: 0,
                rating_graph: [0],
                highest_score: 0
            }
        ])
        if (leaderboardResp.error) {
            logError(apiName, error.message);
            res.status(400).send(`Error: ${error.message}`);
        }
        logSuccess(apiName);
        res.status(200).send({ message: 'User Registered Succesfully', user: data[0] });
    } catch (error) {
        res.status(500).send(`Error: ${error}`);
    }
}


export const fetchUser = async (req, res) => {
    const { userId } = req.body;
    const apiName = 'fetch-user';
    try {
        const { data, error } = await supabase.from('User').select('*').match({ email: userId });
        if (error) {
            logError(apiName, error.message);
            return res.status(400).send(`Error: ${error.message}`);
        }
        if (!data || data.length === 0) {
            logSuccess(apiName);
            return res.status(400).send({ message: 'User does not exist' });
        }
        const user = data[0];
        logSuccess(apiName);
        return res.status(200).send({ message: 'User Fetched Successfully', user });
    } catch (error) {
        return res.status(500).send(`Error: ${error.message}`);
    }
}