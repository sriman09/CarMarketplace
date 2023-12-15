const express = require("express");
const createInquiry = require("../controller/SellInquiry");
const router = express.Router();

router.post("/create-inquiry", createInquiry);

module.exports = router;
