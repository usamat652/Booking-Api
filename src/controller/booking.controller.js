import Booking from "../models/booking.model.js";

export const createBooking = async (req, res) => {
  const { user, start_at, finish_at } = req.body;

  if (!user || !start_at || !finish_at) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const booking = new Booking({
      user,
      // agent: req.agent.id, 
      start_at,
      finish_at,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};


export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Booking removed" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
