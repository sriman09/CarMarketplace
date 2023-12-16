const Users = require("../models/Users");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, type } = req.body;
    if (!firstName && !lastName && !email && !password && !type) {
      return res.status(400).json({
        message: "Please provide all the details",
      });
    } else {
      const hasedPassword = await hashPassword(password);
      const user = new Users({
        firstName,
        lastName,
        email,
        password: hasedPassword,
        type,
      });
      await user.save();
      res.status(200).json({
        message: "User Register Successfully",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email && !password) {
      return res.status(400).json({
        message: "Please provide required details.",
      });
    } else {
    }
  } catch (err) {
    res.status.json({
      message: "Internal Server Error",
    });
  }
};

module.exports = registerUser;
