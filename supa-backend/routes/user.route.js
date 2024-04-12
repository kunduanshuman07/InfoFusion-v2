import express from "express";
import { deleteAccount, forgotPassword, updateProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/update-profile', updateProfile);
router.post('/update-password', forgotPassword);
router.post('/delete-account', deleteAccount);
export default router;


