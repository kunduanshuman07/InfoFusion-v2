import express from "express";
import authRoutes from "../routes/auth.route.js";


const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoutes
    },
]

defaultRoutes.forEach((routes)=>{
    router.use(routes.path, routes.route);
})

export default router;
