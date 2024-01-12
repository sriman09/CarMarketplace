const Brands = require("../models/Brands");

//Get
const getAllBrands = async (req, res) => {
  try {
    const brands = await Brands.find({ isDeleted: { $ne: 1 } });
    res.status(200).json({
      message: "Success",
      brands: brands,
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//Register
const registerBrand = async (req, res) => {
  try {
    const { brandName } = req.body;
    const filePath = req.filePaths;
    const brand = new Brands({ brandName, logo: filePath });
    await brand.save();
    res.status(200).json({
      message: "Brand register Successfully",
    });
  } catch (err) {
    console.log("Error", err);
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};

//Update
const editBrandData = async (req, res) => {
  try {
    const id = req.params.id;
    await Brands.findByIdAndDelete(id); //Need to change
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//Delete
const deleteBrand = async (req, res) => {
  try {
    const id = req.params.id;
    await Brands.findOneAndUpdate(
      { _id: id },
      { $set: { isDeleted: 1 } },
      { new: true }
    );
    res.status(200).json({
      message: "Brand Deleted Successfully",
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//Search
const searchBrands = async (req, res) => {
  const searchQuery = req.body.searchQuery;
  const pipeline = [
    {
      $match: {
        isDeleted: { $ne: 1 },
        brandName: {
          $regex: new RegExp(searchQuery, "i"),
        },
      },
    },
  ];

  try {
    const brands = await Brands.aggregate(pipeline);
    res.status(200).json({
      message: "Success",
      brands: brands,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBrands,
  registerBrand,
  deleteBrand,
  editBrandData,
  searchBrands,
};
