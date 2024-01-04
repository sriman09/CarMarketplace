const mongoose = require("mongoose");
const Models = require("../models/Models");

//Register
const registerModel = async (req, res) => {
  try {
    const { brandId, modelName } = req.body;
    const model = new Models({ brandId, modelName });
    await model.save();
    res.status(200).json({
      message: "Model Created Successfully",
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//Get Models by brand
const getModelsForBrand = async (req, res) => {
  const brandId = req.params.brandId;
  try {
    const models = await Models.find({ brandId: brandId });
    res.status(200).json({
      models: models,
    });
  } catch (err) {
    console.log("error", err),
      res.status(500).json({
        message: "Internal Server Error",
      });
  }
};

//Get all Models
const getAllModels = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 10;
    const pipeline = [
      {
        $lookup: {
          from: "brands",
          localField: "brandId",
          foreignField: "_id",
          as: "brand",
        },
      },
      {
        $unwind: "$brand",
      },
      {
        $project: {
          _id: 1,
          modelName: 1,
          brandName: "$brand.brandName",
          brandId: 1,
        },
      },
      {
        $skip: (page - 1) * pageSize,
      },
      {
        $limit: pageSize,
      },
    ];

    const result = await Models.aggregate(pipeline);
    res.json({
      message: "success",
      models: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

//Update
const editModelData = async (req, res) => {
  try {
    const id = req.params.id;
    const model = await Models.findById(IdleDeadline);
    res.status(200).json({
      message: "Success",
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//Delete
const deleteModel = async (req, res) => {
  try {
    const id = req.params.id;
    await Models.findByIdAndDelete(id);
    res.status(200).json({
      message: "Model Deleted Successfully",
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  registerModel,
  editModelData,
  deleteModel,
  getModelsForBrand,
  getAllModels,
};
