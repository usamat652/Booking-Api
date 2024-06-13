import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const agentId = req.header('X-Agent-Id');
    if (!agentId) {
      return res.status(400).json({ error: 'X-Agent-Id header is required' });
    }
    const users = await User.find({ agent: agentId });
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};


export const registerUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};