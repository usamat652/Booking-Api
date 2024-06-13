import Booking from "../models/booking.model.js";

export const createBooking = async (req, res) => {
  const { user, start_at, finish_at } = req.body;
  try {
    const booking = new Booking({
      user,
      agent: req.agent.id,
      start_at,
      finish_at,
    });
    await booking.save();
    res.json(booking);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndRemove(req.params.id);
    res.json({ msg: "Booking removed" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
