import Agent from "../models/agent.model.js";

export const getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

