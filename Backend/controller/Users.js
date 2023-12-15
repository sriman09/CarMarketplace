const Users = require("../models/Users");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, type } = req.body;
    if (!firstName && !lastName && !email && !password && !type) {
      return res.status(400).json({
        message: "Please provide all the details",
      });
    } else {
      const user = new Users({ firstName, lastName, email, password, type });
      await user.save();
      res.status(200).json({
        message: "User Register Successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = registerUser;
