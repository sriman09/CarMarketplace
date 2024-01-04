const express = require("express");
const { registerCar } = require("../controller/Cars");
const {
  registerModel,
  editModelData,
  deleteModel,
  getModelsForBrand,
  getAllModels,
} = require("../controller/Models");
const router = express.Router();

router.post("/register-model", registerModel);
router.put("/edit-model/:id", editModelData);
router.put("/delete-model/:id", deleteModel);
router.get("/get-model-by-brandId/:brandId", getModelsForBrand);
router.get("/get-models", getAllModels);

module.exports = router;
