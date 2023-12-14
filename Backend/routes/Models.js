const express = require("express");
const { registerCar } = require("../controller/Cars");
const {
  registerModel,
  editModelData,
  deleteModel,
} = require("../controller/Models");
const router = express.Router();

router.post("/register-model", registerModel);
router.put("/edit-model/:id", editModelData);
router.put("/delete-model/:id", deleteModel);

module.exports = router;
