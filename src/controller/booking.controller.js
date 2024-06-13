import Agent from "../models/agent.model.js";
import Booking from "../models/booking.model.js";
import User from "../models/user.model.js";

export const createBooking = async (req, res) => {
  const { user, start_at, finish_at } = req.body;
  const agentId = req.header("X-Agent-Id");

  if (!user || !start_at || !finish_at) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const booking = new Booking({
      user,
      agent: agentId,
      start_at,
      finish_at,
    });

    await booking.save();

    // Update the user's bookings array with the new booking's ID
    const userDoc = await User.findById(user);
    if (userDoc) {
      userDoc.bookings.push(booking._id);
      await userDoc.save();
    } else {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the agent's bookings array with the new booking's ID
    const agentDoc = await Agent.findById(agentId);
    if (agentDoc) {
      agentDoc.bookings.push(booking._id);
      await agentDoc.save();
    } else {
      return res.status(404).json({ error: "Agent not found" });
    }

    res.status(201).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const updateUserAndAgent = [
      User.updateOne(
        { _id: booking.user },
        { $pull: { bookings: booking._id } }
      ),
      Agent.updateOne(
        { _id: booking.agent },
        { $pull: { bookings: booking._id } }
      ),
    ];

    await Promise.all(updateUserAndAgent);

    res.status(200).json({ message: "Booking removed" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};
