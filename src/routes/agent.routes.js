import express from "express";
const agentRouter = express.Router();
import { getAllAgents, registerAgent } from "../controller/agent.controller.js";
import auth from "../middleware/auth.js";

agentRouter.get("/agents", auth, getAllAgents);
agentRouter.post("/addAgent", registerAgent);

export default agentRouter;
