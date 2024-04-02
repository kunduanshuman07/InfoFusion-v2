import express from "express";
import { fetchDashboardData } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.post('/fetch-user-dashboard', fetchDashboardData);

export default router;


