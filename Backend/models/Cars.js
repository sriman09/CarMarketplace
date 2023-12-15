const mongoose = require("mongoose");

const CarsSchema = new mongoose.Schema({
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Models",
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  kilometers: {
    type: Number,
    required: true,
  },
  fuelType: {
    type: String,
    enum: ["petrol", "diesel", "ev"],
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  ownership: {
    type: String,
    required: true,
  },
  seatingCapacity: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  showPrice: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Number,
    default: 0,
  },
});

const Cars = mongoose.model("Cars", CarsSchema);
module.exports = Cars;
