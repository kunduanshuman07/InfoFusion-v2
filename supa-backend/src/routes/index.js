import express from "express";
import authRoutes from "../routes/auth.route.js";
import quizRoutes from "../routes/quiz.route.js";
import dashboardRoutes from "../routes/dashboard.route.js";
import leaderboardRoutes from "../routes/leaderboard.route.js";

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/quiz',
        route: quizRoutes
    },
    {
        path: '/dashboard',
        route: dashboardRoutes
    },
    {
        path: '/leaderboard',
        route: leaderboardRoutes
    }
]

defaultRoutes.forEach((routes)=>{
    router.use(routes.path, routes.route);
})

export default router;
