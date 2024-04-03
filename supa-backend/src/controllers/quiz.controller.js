// All Quiz controllers

import { supabase } from '../config/db.config.js';

export const addQuizByAdmin = async (req, res) => {
    const { quizTitle, quizData } = req.body;
    const quiz_index = 1;
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

export const submitQuiz = async (req, res) => {
    const { userId, quizId, quizData, selectedOptions } = req.body;
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
    let unattempted_questions = [];
    for (let i = 0; i < 10; i++) {
        if(quizData[i].correct_answer===selectedOptions[i]){
            score=score+1;
            weighted_score=weighted_score+weightage[quizData[i].category];
            correct_answers.push({
                question: quizData[i].title,
                correct_answer: quizData[i].correct_answer,
                your_answer: selectedOptions[i],
                category: quizData[i].category
            })
        }
        else if(quizData[i].correctAnswer!==selectedOptions[i]){
            weighted_score=weighted_score-weightage[quizData[i].category];
            incorrect_answers.push({
                question: quizData[i].title,
                correct_answer: quizData[i].correct_answer,
                your_answer: selectedOptions[i],
                category: quizData[i].category
            })
        }
        else {
            unattempted_questions.push({
                question: quizData[i].title,
                correct_answer: quizData[i].correct_answer,
                your_answer: selectedOptions[i],
                category: quizData[i].category
            })
        }
    }
    const total_score = score+weighted_score*4 +100;
    try {
        const {error} = await supabase.from('Quiz_Scores').insert([
            {
                user_id: userId,
                quiz_id: quizId,
                score,
                weighted_score,
                total_score,
                incorrect_answers,
                correct_answers,
                unattempted_questions
            }
        ])
        if (error) {
            return res.status(200).send({ message: 'Error submitting quiz' });
        }
        return res.status(200).send({message: 'SuccessFull quiz submission'});
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
}