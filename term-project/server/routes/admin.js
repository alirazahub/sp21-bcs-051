import express from "express";
import { login, register, verify, allUsers, deleteUser, addNewUser,
    addGenere,allGeneres, deleteGenere } from "../controllers/admin.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/verify", verifyUser, verify);
router.get("/all-users", allUsers);
router.post("/add-user", addNewUser);
router.delete("/delete-user/:id", deleteUser);

router.post("/add-genere", addGenere);
router.get("/all-generes", allGeneres);
router.delete("/delete-genere/:id", deleteGenere);

export default router;