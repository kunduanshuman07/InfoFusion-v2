import express from "express";
import { fetchDashboardData, fetchFullScorecard, fetchScorecards } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.post('/fetch-user-dashboard', fetchDashboardData);
router.post('/scorecards', fetchScorecards);
router.post('/scorecard', fetchFullScorecard);

export default router;


