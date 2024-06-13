import mongoose from "mongoose";
const { Schema, model } = mongoose;

const agentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["ADMIN", "REGULAR"], default: "REGULAR" },
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Agent = model("Agent", agentSchema);
export default Agent;
