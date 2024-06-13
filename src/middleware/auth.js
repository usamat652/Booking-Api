// middlewares/auth.js
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  const token = req.header('X-Agent-Id');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.agent = await Agent.findById(decoded.id);
    if (!req.agent) return res.status(401).json({ msg: 'Agent not found' });
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default auth;
