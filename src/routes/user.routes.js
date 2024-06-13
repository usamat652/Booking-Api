import express from "express";
const userRouter = express.Router();
import { getAllUsers, registerUser } from "../controller/user.controller.js";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

userRouter.get('/users', auth, role(['REGULAR', 'ADMIN']), getAllUsers);
userRouter.post('/addUser', registerUser);

export default userRouter;