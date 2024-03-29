const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  searchUsers,
  deleteUser,
} = require("../controller/Users");
const authenticateJWT = require("../middleware/authenticateJWT");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register-user", authenticateJWT, registerUser);
router.get("/get-all-users", authenticateJWT, getAllUsers);
router.post("/search-users", authenticateJWT, searchUsers);
router.delete("/delete-user/:id", authenticateJWT, deleteUser);

module.exports = router;
