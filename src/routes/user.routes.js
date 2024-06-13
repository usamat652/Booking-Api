import express from "express";
const userRouter = express.Router();
import { getAllUsers } from "../controller/user.controller.js";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

userRouter.get('/users', auth, role(['REGULAR', 'ADMIN']), getAllUsers);

export default userRouter;