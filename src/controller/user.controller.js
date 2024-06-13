import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ agent: req.agent.id });
    res.json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
};