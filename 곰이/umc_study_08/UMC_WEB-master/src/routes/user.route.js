import express from "express";
import { userLogin, userPayload } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.middleware.js";

export const userRouter = express.Router();

userRouter.post('/login', userLogin);
userRouter.get('/payload', verifyToken, userPayload);