const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const secretKey = process.env.JWT_TOKEN_KEY;

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

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Users.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        { email: user.email, id: user._id },
        secretKey
      );
      return res.status(200).json({
        message: "Success",
        userInfo: {
          name: user.firstName + " " + user.lastName,
          email: user.email,
          type: user.type,
          accessToken: accessToken,
        },
      });
    } else {
      res.status(401).json({
        message: "Unauthorized User",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { registerUser, loginUser };
