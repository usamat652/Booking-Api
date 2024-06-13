import Agent from "../models/agent.model.js";

// const auth = async (req, res, next) => {
//   const token = req.header('X-Agent-Id');
//   if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.agent = await Agent.findById(decoded.id);
//     if (!req.agent) return res.status(401).json({ msg: 'Agent not found' });
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };

const auth = async (req, res, next) => {
  const agentId = req.header("X-Agent-Id");
  if (!agentId) {
    return res.status(400).json({ error: "X-Agent-Id header is required" });
  }

  try {
    const agent = await Agent.findById(agentId);
    if (!agent) {
      return res.status(404).json({ error: "Agent not found" });
    }

    if (agent.role !== "ADMIN") {
      return res
        .status(403)
        .json({ error: "Access denied. Admin role required." });
    }

    req.agentId = agentId;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

export default auth;
