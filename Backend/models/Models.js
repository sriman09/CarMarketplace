const mongoose = require("mongoose");
const Brands = require("./Brands");

const ModelSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required: true,
  },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brands",
    required: true,
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

const Models = mongoose.model("Models", ModelSchema);
module.exports = Models;
