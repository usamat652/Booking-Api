import express from "express";
const agentRouter = express.Router();
import { getAllAgents } from "../controller/agent.controller.js";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

agentRouter.get("/agents", auth, role(["ADMIN"]), getAllAgents);

export default agentRouter;
