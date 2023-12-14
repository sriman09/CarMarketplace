const Brands = require("../models/Brands");

//Get
const getAllBrands = async (req, res) => {
  try {
    const brands = await Brands.find();
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
    const brand = new Brands({ brandName });
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
    await Brands.findByIdAndDelete(id);
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

//Get Models for Brand
const getModelsForBrand = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id); //Need to be changed
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getAllBrands,
  registerBrand,
  deleteBrand,
  editBrandData,
  getModelsForBrand,
};
