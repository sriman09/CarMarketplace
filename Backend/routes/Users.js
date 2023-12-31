const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  searchUsers,
} = require("../controller/Users");
const authenticateJWT = require("../middleware/authenticateJWT");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register-user", authenticateJWT, registerUser);
router.get("/get-all-users", authenticateJWT, getAllUsers);
router.get("/search-users", authenticateJWT, searchUsers);

module.exports = router;
