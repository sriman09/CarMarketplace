const Cars = require("../models/Cars");

//Create
const registerCar = async (req, res) => {
  try {
    const { brand, model, year, price } = req.body;
    const Car = new Cars({ brand, model, year, price });
    await Car.save();
    res.status(200).json({
      message: "Car Registered Successfully",
    });
  } catch (err) {
    console.log("Car Registration Failed!", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//Update
const editCarData = async (req, res) => {
  const id = req.params.id;
  try {
    const car = await Cars.findById(id);
    console.log("car", car);
    res.status(200).json({
      message: "Success",
      data: car,
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//Read
const getAllCars = async (req, res) => {
  try {
    const AllCars = await Cars.find({ isDeleted: { $ne: 1 } });
    res.status(200).json({
      message: "Success",
      data: AllCars,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//Delete
const deleteCarData = async (req, res) => {
  const id = req.params.id;
  try {
    const car = await Cars.findOneAndUpdate(
      { _id: id },
      { $set: { isDeleted: 1 } },
      { new: true }
    );
    res.status(200).json({
      message: "Car Deleted Successfully",
      id: id,
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { getAllCars, registerCar, editCarData, deleteCarData };
