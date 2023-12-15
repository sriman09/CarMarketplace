const express = require("express");
const { registerCar } = require("../controller/Cars");
const {
  registerModel,
  editModelData,
  deleteModel,
  getModelsForBrand,
} = require("../controller/Models");
const router = express.Router();

router.post("/register-model", registerModel);
router.put("/edit-model/:id", editModelData);
router.put("/delete-model/:id", deleteModel);
router.get("/get-model-by-brandId/:brandId", getModelsForBrand);

module.exports = router;
