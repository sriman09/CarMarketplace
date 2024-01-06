const express = require("express");
const { registerUser, loginUser, getAllUsers } = require("../controller/Users");
const authenticateJWT = require("../middleware/authenticateJWT");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register-user", authenticateJWT, registerUser);
router.get("/get-all-users", authenticateJWT, getAllUsers);

module.exports = router;
