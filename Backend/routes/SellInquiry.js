const express = require("express");
const {
  createInquiry,
  getEnquiry,
  searchSellInquiries,
  deleteEnquiry,
} = require("../controller/SellInquiry");
const authenticateJWT = require("../middleware/authenticateJWT");
const router = express.Router();

router.post("/create-inquiry", createInquiry);
router.get("/get-enquiry", authenticateJWT, getEnquiry);
router.post("/search-enquiry", authenticateJWT, searchSellInquiries);
router.delete("/delete-inquiry", authenticateJWT, deleteEnquiry);

module.exports = router;
