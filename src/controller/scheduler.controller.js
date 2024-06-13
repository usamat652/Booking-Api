import Booking from "../models/booking.model.js";

export const getScheduler = async (req, res) => {
  try {
    const { week } = req.query;
    const agentId = req.header('X-Agent-Id');
    if (!week)
      return res
        .status(400)
        .json({ error: "Week query parameter is required" });
    const bookings = await Booking.find({ agent: agentId })
      .populate("user")
      .exec();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching scheduler:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};
