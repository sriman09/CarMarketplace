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

module.exports = createInquiry;
