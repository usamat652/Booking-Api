import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  agent: { type: Schema.Types.ObjectId, ref: "Agent" },
  start_at: { type: Date, default: Date.now },
  finish_at: { type: Date, required: true },
});

const Booking = model("Booking", bookingSchema);
export default Booking;
