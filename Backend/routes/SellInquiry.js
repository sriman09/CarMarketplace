const express = require("express");
const { createInquiry, getEnquiry } = require("../controller/SellInquiry");
const authenticateJWT = require("../middleware/authenticateJWT");
const router = express.Router();

router.post("/create-inquiry", createInquiry);
router.get("/get-enquiry", authenticateJWT, getEnquiry);

module.exports = router;
