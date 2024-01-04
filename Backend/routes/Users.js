const express = require("express");
const { registerUser, loginUser, getAllUsers } = require("../controller/Users");
const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login", loginUser);
router.get("/get-all-users", getAllUsers);

module.exports = router;
