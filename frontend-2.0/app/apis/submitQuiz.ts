'use server'

import { createClient } from "@supabase/supabase-js";

export const submitQuiz = async ({ userId, quizId, quizData, selectedOptions, quizTitle, quizIndex, username }: any) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

    const weightage: any = {
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
    let medcount = 0;
    let hardcount = 0;
    let misccount = 0;
    for (let i = 0; i < 10; i++) {
        const formattedObject = [quizData[i].title, quizData[i].correct_answer, selectedOptions[i], quizData[i].category]
        if (quizData[i].correct_answer === selectedOptions[i]) {
            if (quizData[i].category === 'Easy') {
                easycount = easycount + 1;
            }
            else if (quizData[i].category === 'Medium') {
                medcount = medcount + 1;
            }
            else if (quizData[i].category === 'Hard') {
                hardcount = hardcount + 1;
            }
            else if (quizData[i].category === 'Misc') {
                misccount = misccount + 1;
            }
            score = score + 1;
            weighted_score = weighted_score + weightage[quizData[i].category];
            correct_answers.push(formattedObject)
        }
        else {
            incorrect_answers.push(formattedObject)
        }
    }
    const total_score = score + weighted_score * 4 + 100;
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
        }
    ])
    if (error) {
        return { status: 200, data: { message: 'Error submitting quiz' } };
    }
    const { data } = await supabase.from('Leaderboard').select('*').match({ user_id: userId });
    const user = data?.[0];
    const newRating = user.quiz_count == 0 ? (weighted_score * 10) : ((user.rating * user.quiz_count) + (weighted_score * 10)) / (user.quiz_count + 1);
    const new_high_score = user.highest_score < total_score ? total_score : user.highest_score;
    const updatedRatingGraph = [...user.rating_graph, newRating];
    const leaderboardResp = await supabase.from('Leaderboard').update({
        rating: Math.floor(newRating),
        questions: user.questions + 10,
        correct_answers: user.correct_answers + correct_answers.length,
        easy: user.easy + easycount,
        med: user.med + medcount,
        hard: user.hard + hardcount,
        misc: user.misc + misccount,
        quiz_count: user.quiz_count + 1,
        rating_graph: updatedRatingGraph,
        highest_score: new_high_score,
    }).match({ user_id: userId });
    return { status: 200, data: { message: 'SuccessFull quiz submission' } };
}