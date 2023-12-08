import express from "express";
import { login, register,updateProfile } from "../controllers/user.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();

router.post("/user/login", login);
router.post("/user/register", register);
router.put("/user/profile", updateProfile);


export default router;