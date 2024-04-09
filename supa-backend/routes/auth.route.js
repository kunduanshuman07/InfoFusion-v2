import express from "express";
import { fetchUser, login, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/user-fetch', fetchUser);
export default router;


