import express from "express";
import { login, register,updateProfile,updateProfileImage } from "../controllers/user.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();

router.post("/user/login", login);
router.post("/user/register", register);
router.put("/user/profile/:id", updateProfile);
router.put("/user/change-profile-img/:id", updateProfileImage);


export default router;