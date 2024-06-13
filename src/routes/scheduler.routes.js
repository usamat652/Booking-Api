import express from "express";
const schedulerRouter = express.Router();
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

schedulerRouter.get('/scheduler', auth, role(['REGULAR', 'ADMIN']), (req, res) => {
  res.status(200).send('OK');
});

export default schedulerRouter;