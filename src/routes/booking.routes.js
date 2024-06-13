import express from "express";
const bookingRouter = express.Router();
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";
import {
  createBooking,
  deleteBooking,
} from "../controller/booking.controller.js";

bookingRouter.post("/booking", auth, role(["ADMIN"]), createBooking);
bookingRouter.delete("/booking/:id", auth, role(["ADMIN"]), deleteBooking);

export default bookingRouter;
