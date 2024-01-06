const express = require("express");
const {
  getAllBrands,
  registerBrand,
  deleteBrand,
  editBrandData,
  searchBrands,
} = require("../controller/Brands");
const authenticateJWT = require("../middleware/authenticateJWT");
const router = express.Router();

router.get("/get-brands", getAllBrands);
router.post("/register-brand", authenticateJWT, registerBrand);
router.put("/edit-brand/:id", authenticateJWT, editBrandData);
router.delete("/delete-brand/:id", authenticateJWT, deleteBrand);
router.get("/search-brands", searchBrands);

module.exports = router;
