const SellInquiry = require("../models/SellInquiry");

const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, brand, year, model } = req.body;
    if (!name && !email && !phone && !brand && !year && !model) {
      return res.status(400).json({
        message: "Please provide all required fields.",
      });
    } else {
      const inquiry = new SellInquiry({
        name,
        email,
        phone,
        brand,
        model,
        year,
      });
      await inquiry.save();
      res.status(200).json({
        message: "Success",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getEnquiry = async (req, res) => {
  try {
    const enquiries = await SellInquiry.find();
    res.status(200).json({
      message: "success",
      enquiries: enquiries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Error",
    });
  }
};

module.exports = { createInquiry, getEnquiry };
