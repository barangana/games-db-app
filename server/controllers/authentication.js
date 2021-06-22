const jwt = require("jsonwebtoken");

// Authentication Middleware
// Gets the token from the header, if it does not exist, access denied.
// If token does exists, verify token and then set it with the user.
module.exports = function verifyToken(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
