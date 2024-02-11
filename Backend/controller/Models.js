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
    const models = await Models.find({
      brandId: brandId,
      isDeleted: { $ne: 1 },
    });
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

    // Count total number of documents
    const totalCount = await Models.countDocuments({ isDeleted: { $ne: 1 } });

    const pipeline = [
      {
        $match: {
          isDeleted: { $ne: 1 },
        },
      },
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

    // Calculate total number of pages
    const totalPages = Math.ceil(totalCount / pageSize);

    res.json({
      message: "success",
      models: result,
      totalPages: totalPages,
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
    await Models.findOneAndUpdate(
      { _id: id },
      { $set: { isDeleted: 1 } },
      { new: true }
    );
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

const searchModels = async (req, res) => {
  const searchQuery = req.body.searchQuery;
  const pipeline = [
    {
      $match: {
        isDeleted: { $ne: 1 },
        modelName: { $regex: new RegExp(searchQuery, "i") }, // Case-insensitive regex search
      },
    },
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
  ];

  try {
    const models = await Models.aggregate(pipeline);
    res.status(200).json({
      message: "Success",
      models: models,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerModel,
  editModelData,
  deleteModel,
  getModelsForBrand,
  getAllModels,
  searchModels,
};
