const express = require("express");
const {
  registerCar,
  getAllCars,
  editCarData,
  deleteCarData,
} = require("../controller/Cars");
const authenticateJWT = require("../middleware/authenticateJWT");

const router = express.Router();

router.post("/register-car", authenticateJWT, registerCar);
router.get("/get-all-cars", getAllCars);
router.put("/edit-car/:id", authenticateJWT, editCarData);
router.delete("/delete-car/:id", authenticateJWT, deleteCarData);

module.exports = router;
