const express = require("express");
const { registerCar } = require("../controller/Cars");
const {
  registerModel,
  editModelData,
  deleteModel,
  getModelsForBrand,
  getAllModels,
} = require("../controller/Models");
const authenticateJWT = require("../middleware/authenticateJWT");
const router = express.Router();

router.post("/register-model", authenticateJWT, registerModel);
router.put("/edit-model/:id", authenticateJWT, editModelData);
router.put("/delete-model/:id", authenticateJWT, deleteModel);
router.get("/get-model-by-brandId/:brandId", getModelsForBrand);
router.get("/get-models", getAllModels);

module.exports = router;
