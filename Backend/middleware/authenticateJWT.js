const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(200).json({
      message: "Unauthorized User",
    });
  }

  jwt.verify(token, "Banda", (err, user) => {
    if (err) {
      return res.status(403).json({
        message: err,
      });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
