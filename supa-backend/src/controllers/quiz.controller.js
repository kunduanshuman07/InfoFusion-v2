// All Quiz controllers

import { supabase } from '../config/db.config.js';

export const addQuizByAdmin = async (req, res) => {
    const { quizTitle, quizData } = req.body;
    const quiz_index = 2;
    try {
        const { error } = await supabase.from('Quiz').insert([
            {
                title: quizTitle,
                quiz_index
            }
        ])
        if (error) {
            return res.status(400).send({ message: 'Error creating new quiz' });
        }
        const quizResp = await supabase.from('Quiz').select('*').match({ quiz_index: quiz_index });
        const quiz_id = quizResp.data[0].id;
        quizData.map((question) => {
            addQuizQuestions(quiz_id, question);
        })
        res.status(200).send({ message: 'Quiz succesfully created.' });
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
}

const addQuizQuestions = async (quiz_id, question) => {
    await supabase.from('Questions').insert([
        {
            title: question.question,
            quiz_id: quiz_id,
            correct_answer: question.correctAnswer,
            category: question.category,
            options: question.options
        }
    ])
}

export const fetchCurrentQuiz = async (req, res) => {
    try {
        const { data, error } = await supabase.from('Quiz').select('*')
            .order('created_at', { ascending: false })
            .limit(1);
        if (error) {
            return res.status(200).send({ message: 'Error fetching the latest quiz data.' });
        }
        const questionResp = await supabase.from('Questions').select('*').match({ quiz_id: data[0].id }).order('category', { ascending: true });
        if (questionResp.error) {
            return res.status(200).send({ message: 'Error fetching current quiz questions.' });
        }
        return res.status(200).send({ message: 'Current quiz successfully fetched', quizId: data[0].id, quizTitle: data[0].title, quizIndex: data[0].quiz_index, quizDesc: data[0].quiz_description, descLink: data[0].desc_link, quizData: questionResp.data, });
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
}

export const fetchPastQuizzes = async (req, res) => {

}

export const fetchQuizEnability = async (req, res) => {
    const { userId, quizId } = req.body;
    try {
        const { data, error } = await supabase.from('Quiz_Scores').select('*').match({ quiz_id: quizId, user_id: userId });
        if (error) {
            return res.status(200).send({ message: 'Error fetching the latest quiz enability.' });
        }
        if (data.length === 0) {
            return res.status(200).send({ value: true });
        }
        return res.status(200).send({ value: false });
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
}

export const submitQuiz = async (req, res) => {
    const { userId, quizId, quizData, selectedOptions, quizTitle, quizIndex, username } = req.body;
    const weightage = {
        'Easy': 1,
        'Medium': 1.5,
        'Hard': 2,
        'Misc': 2.5
    }
    let score = 0;
    let weighted_score = 0;
    let correct_answers = [];
    let incorrect_answers = [];
    let easycount = 0;
    let medcount=0;
    let hardcount=0;
    let misccount=0;
    for (let i = 0; i < 10; i++) {
        const formattedObject = [quizData[i].title, quizData[i].correct_answer, selectedOptions[i], quizData[i].category]
        if (quizData[i].correct_answer === selectedOptions[i]) {
            if(quizData[i].category==='Easy'){
                easycount=easycount+1;
            }
            else if(quizData[i].category==='Medium'){
                medcount=medcount+1;
            }
            else if(quizData[i].category==='Hard'){
                hardcount=hardcount+1;
            }
            else if(quizData[i].category==='Misc'){
                misccount=misccount+1;
            }
            score = score + 1;
            weighted_score = weighted_score + weightage[quizData[i].category];
            correct_answers.push(formattedObject)
        }
        else if (quizData[i].correctAnswer !== selectedOptions[i]) {
            weighted_score = weighted_score - weightage[quizData[i].category];
            incorrect_answers.push(formattedObject)
        }
    }
    const total_score = score + weighted_score * 4 + 100;
    try {
        const { error } = await supabase.from('Quiz_Scores').insert([
            {
                user_id: userId,
                quiz_id: quizId,
                score: score,
                username: username,
                weighted_score: weighted_score,
                total_score: total_score,
                incorrect_answers: incorrect_answers,
                correct_answers: correct_answers,
                quiz_title: quizTitle,
                quiz_index: quizIndex
            }
        ])
        if (error) {
            return res.status(200).send({ message: 'Error submitting quiz' });
        }
        const { data } = await supabase.from('Leaderboard').select('*').match({ user_id: userId });
        const user = data[0];
        const newRating = user.quiz_count==0?(weighted_score*10): ((user.rating*user.quiz_count)+(weighted_score*10))/(user.quiz_count+1);
        const new_high_score = user.highest_score<total_score?total_score: user.highest_score;
        const updatedRatingGraph = [...user.rating_graph, newRating];
        const leaderboardResp = await supabase.from('Leaderboard').update({
            rating: Math.floor(newRating),
            questions: user.questions+10,
            correct_answers: user.correct_answers+correct_answers.length,
            easy: user.easy+easycount,
            med: user.med+medcount,
            hard: user.hard+hardcount,
            misc: user.misc+misccount,
            quiz_count: user.quiz_count+1,
            rating_graph: updatedRatingGraph,
            highest_score: new_high_score,
        }).match({ user_id: userId });
        console.log(leaderboardResp.error);
        return res.status(200).send({ message: 'SuccessFull quiz submission' });
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
}