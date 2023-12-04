import express from "express";
import { login, register } from "../controllers/user.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();

router.post("/user/login", login);
router.post("/user/register", register);


export default router;