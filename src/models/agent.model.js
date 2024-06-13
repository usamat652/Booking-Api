import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AgentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["ADMIN", "REGULAR"], default: "REGULAR" },
});

const Agent = model("Agent", AgentSchema);
export default Agent;
