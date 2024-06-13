import express from "express";
const bookingRouter = express.Router();
import auth from "../middleware/auth.js";
import {
  createBooking,
  deleteBooking,
} from "../controller/booking.controller.js";
// auth, role(["ADMIN"]),
bookingRouter.post("/booking", auth, createBooking);
bookingRouter.delete("/booking/:id", auth, deleteBooking);


export default bookingRouter;
