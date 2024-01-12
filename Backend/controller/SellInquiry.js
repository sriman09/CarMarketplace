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
    const enquiries = await SellInquiry.find({ isDeleted: { $ne: 1 } });
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

const searchSellInquiries = async (req, res) => {
  const searchQuery = req.body.searchQuery;
  const pipeline = [
    {
      $match: {
        isDeleted: { $ne: 1 },
        $or: [
          { name: { $regex: new RegExp(searchQuery, "i") } },
          { email: { $regex: new RegExp(searchQuery, "i") } },
          { phone: { $regex: new RegExp(searchQuery, "i") } },
          { brand: { $regex: new RegExp(searchQuery, "i") } },
          { model: { $regex: new RegExp(searchQuery, "i") } },
        ],
      },
    },
  ];

  try {
    const enquiries = await SellInquiry.aggregate(pipeline);
    res.status(200).json({
      message: "success",
      enquiries: enquiries,
    });
  } catch (error) {
    throw error;
  }
};

//Delete
const deleteEnquiry = async (req, res) => {
  try {
    const id = req.params.id;
    await SellInquiry.findOneAndUpdate(
      { _id: id },
      { $set: { isDeleted: 1 } },
      { new: true }
    );
    res.status(200).json({
      message: "Enquiry Deleted Successfully",
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createInquiry,
  getEnquiry,
  searchSellInquiries,
  deleteEnquiry,
};
