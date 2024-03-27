// User Authentication

import { supabase } from "../config/db.config.js";

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const { data, error } = await supabase.from('User').select('*').match({ username: username });
        if (error) {
            res.status(400).send(`Error: ${error.message}`);
        }
        else if (data[0].password !== password) {
            res.status(400).send(`Error: Invalid Password`);
        }
        res.status(200).send({ message: 'User Logged In Succesfully', user: data[0] });
    } catch (error) {
        res.status(500).send(`Error: ${error}`);
    }
}

export const register = async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body;
    try {
        const { error } = await supabase.from('User').insert([{
            firstname, lastname, username, email, password
        }]);
        if (error) {
            res.status(400).send(`Error: ${error.message}`);
        }
        const { data } = await supabase.from('User').select('*').match({ email: email });
        res.status(200).send({ message: 'User Registered Succesfully', user: data[0] });
    } catch (error) {
        res.status(500).send(`Error: ${error}`);
    }
}
