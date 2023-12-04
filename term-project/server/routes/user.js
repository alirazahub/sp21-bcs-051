import express from "express";
import { login } from "../controllers/user.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();

router.post("/login", login);


export default router;