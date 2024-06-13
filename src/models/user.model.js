import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
});

const User = model("User", userSchema);
export default User;
