import express from "express";
import {addQuizByAdmin, fetchCurrentQuiz, fetchPastQuizzes, submitQuiz} from "../controllers/quiz.controller.js"
const router = express.Router();

router.post('/add-quiz-admin',addQuizByAdmin);
router.get('/current-quiz',fetchCurrentQuiz);
router.get('/past-quizzes',fetchPastQuizzes);
router.post('/submit-quiz',submitQuiz);

export default router;