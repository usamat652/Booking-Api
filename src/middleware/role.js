const role = (roles) => (req, res, next) => {
    if (!roles.includes(req.agent.role)) {
      return res.status(403).json({ msg: 'Access denied' });
    }
    next();
  };
  
  export default role;