const express = require("express");
const {
  getAllBrands,
  registerBrand,
  deleteBrand,
  editBrandData,
} = require("../controller/Brands");
const router = express.Router();

router.get("/get-brands", getAllBrands);
router.post("/register-brand", registerBrand);
router.put("/edit-brand/:id", editBrandData);
router.delete("/delete-brand/:id", deleteBrand);

module.exports = router;
