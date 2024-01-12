const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  },
  isDeleted: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Brands = mongoose.model("Brands", BrandSchema);
module.exports = Brands;
