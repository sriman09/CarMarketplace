const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Users.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        { email: user.email, id: user._id },
        "Banda"
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

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find(
      {},
      {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        type: 1,
      }
    );
    res.status(200).json({
      message: "Success",
      users: allUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const searchUsers = async (req, res) => {
  const searchQuery = req.body.searchQuery;
  const pipeline = [
    {
      $match: {
        $or: [
          { firstName: { $regex: new RegExp(searchQuery, "i") } },
          { lastName: { $regex: new RegExp(searchQuery, "i") } },
          { email: { $regex: new RegExp(searchQuery, "i") } },
        ],
      },
    },
  ];

  try {
    const users = await Users.aggregate(pipeline);
    res.status(200).json({
      message: "Success",
      users: users,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser, loginUser, getAllUsers, searchUsers };
