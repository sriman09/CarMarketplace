const express = require("express");
const {
  getAllBrands,
  registerBrand,
  deleteBrand,
  editBrandData,
  searchBrands,
} = require("../controller/Brands");
const authenticateJWT = require("../middleware/authenticateJWT");
const multer = require("multer");
const { imageUpload } = require("../middleware/upload");
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/get-brands", getAllBrands);
router.post(
  "/register-brand",
  upload.single("file"),
  imageUpload,
  registerBrand
);
router.put("/edit-brand/:id", authenticateJWT, editBrandData);
router.delete("/delete-brand/:id", authenticateJWT, deleteBrand);
router.post("/search-brands", searchBrands);
router.post("/upload-image", upload.single("file"), imageUpload);

module.exports = router;
