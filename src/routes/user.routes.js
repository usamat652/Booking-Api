import express from "express";
const userRouter = express.Router();
import { getAllUsers, registerUser } from "../controller/user.controller.js";

userRouter.get('/users', getAllUsers);
userRouter.post('/addUser', registerUser);

export default userRouter;