const express = require("express");
const {
  registerCar,
  getAllCars,
  editCarData,
  deleteCarData,
} = require("../controller/Cars");

const router = express.Router();

router.post("/register-car", registerCar);
router.get("/get-all-cars", getAllCars);
router.put("/edit-car/:id", editCarData);
router.delete("/delete-car/:id", deleteCarData);

module.exports = router;
