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

//Get Models
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
};
