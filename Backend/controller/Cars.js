const Cars = require("../models/Cars");

//Create
const registerCar = async (req, res) => {
  try {
    const {
      model,
      year,
      price,
      color,
      seatingCapacity,
      ownership,
      vehicleType,
      fuelType,
      kilometers,
      variant,
      images,
    } = req.body;
    const Car = new Cars({
      model,
      year,
      price,
      color,
      seatingCapacity,
      ownership,
      vehicleType,
      fuelType,
      kilometers,
      variant,
      images,
    });
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
    let car = await Cars.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Iterate through the request body and update only the changed fields
    Object.keys(req.body).forEach((key) => {
      if (car[key] !== req.body[key]) {
        car[key] = req.body[key];
      }
    });

    car.updatedAt = new Date();
    await car.save();

    res.status(200).json({
      message: "Car Updated Successfully",
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
    const pipeline = [
      {
        $match: {
          isDeleted: { $ne: 1 },
        },
      },
      {
        $lookup: {
          from: "models", // Replace with the actual name of your Models collection
          localField: "model",
          foreignField: "_id",
          as: "modelDetails",
        },
      },
      {
        $unwind: "$modelDetails",
      },
      {
        $lookup: {
          from: "brands", // Replace with the actual name of your Brands collection
          localField: "modelDetails.brandId",
          foreignField: "_id",
          as: "brandDetails",
        },
      },
      {
        $unwind: "$brandDetails",
      },
      {
        $project: {
          _id: 1,
          modelName: "$modelDetails.modelName",
          brandName: "$brandDetails.brandName",
          variant: 1,
          year: 1,
          price: 1,
          kilometers: 1,
          fuelType: 1,
          vehicleType: 1,
          ownership: 1,
          seatingCapacity: 1,
          color: 1,
          showPrice: 1,
          sold: 1,
          images: 1,
        },
      },
    ];

    const allCars = await Cars.aggregate(pipeline);
    res.status(200).json({
      message: "Success",
      data: allCars,
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

const searchCars = async (req, res) => {
  const searchQuery = req.body.searchQuery;
  const pipeline = [
    {
      $match: {
        isDeleted: { $ne: 1 },
      },
    },
    {
      $lookup: {
        from: "models", // Replace with the actual name of your Models collection
        localField: "model",
        foreignField: "_id",
        as: "modelDetails",
      },
    },
    {
      $unwind: "$modelDetails",
    },
    {
      $lookup: {
        from: "brands", // Replace with the actual name of your Brands collection
        localField: "modelDetails.brandId",
        foreignField: "_id",
        as: "brandDetails",
      },
    },
    {
      $unwind: "$brandDetails",
    },
    {
      $project: {
        _id: 1,
        modelName: "$modelDetails.modelName",
        brandName: "$brandDetails.brandName",
        variant: 1,
        year: 1,
        price: 1,
        kilometers: 1,
        fuelType: 1,
        vehicleType: 1,
        ownership: 1,
        seatingCapacity: 1,
        color: 1,
        showPrice: 1,
        sold: 1,
        images: 1,
      },
    },
    {
      $match: {
        $or: [
          { modelName: { $regex: new RegExp(searchQuery, "i") } },
          { brandName: { $regex: new RegExp(searchQuery, "i") } },
        ],
      },
    },
  ];

  try {
    const results = await Cars.aggregate(pipeline);
    res.status(200).json({
      message: "Success",
      data: results,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCars,
  registerCar,
  editCarData,
  deleteCarData,
  searchCars,
};
