import express from "express";
import { fetchLeaderboard } from "../controllers/leaderboard.controller.js";

const router = express.Router();

router.get('/fetch-leaderboard', fetchLeaderboard);

export default router;


