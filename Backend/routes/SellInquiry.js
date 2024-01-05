const express = require("express");
const { createInquiry, getEnquiry } = require("../controller/SellInquiry");
const router = express.Router();

router.post("/create-inquiry", createInquiry);
router.get("/get-enquiry", getEnquiry);

module.exports = router;
