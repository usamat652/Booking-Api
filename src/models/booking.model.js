import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  agent: { type: Schema.Types.ObjectId, ref: "Agent", required: true },
  start_at: { type: Date, required: true },
  finish_at: { type: Date, required: true },
});

const Booking = model("Booking", bookingSchema);
export default Booking;
