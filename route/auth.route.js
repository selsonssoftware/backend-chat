import express from "express";
import {login,logout } from "../controllers/auth.js";
import { protectRoute  } from "../middleware/auth.middleware.js";
import {checkAuth} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);

export default router;