import express from "express";
const schedulerRouter = express.Router();
import { getScheduler } from "../controller/scheduler.controller.js";

schedulerRouter.get('/scheduler', (req, res) => {
  res.status(200).send('OK');
});
schedulerRouter.get('/schedulers', getScheduler) ;
export default schedulerRouter;