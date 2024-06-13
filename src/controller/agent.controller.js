import Agent from "../models/agent.model.js";

export const getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

export const registerAgent = async (req, res) => {
  const { name, email } = req.body;
  try {
    let agent = await Agent.findOne({ email });
    if (agent) {
      return res.status(400).json({ message: "Agent already exists" });
    }
    agent = new Agent({ name, email, bookings, users });
    await agent.save();
    res.status(201).json({ message: 'agent has been successfully created', agent });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};
