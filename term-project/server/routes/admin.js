import express from "express";
import { login, register, verify, allUsers, deleteUser, addNewUser } from "../controllers/admin.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/verify", verifyUser, verify);
router.get("/all-users", allUsers);
router.post("/add-user", addNewUser);
router.delete("/delete-user/:id", deleteUser);


export default router;