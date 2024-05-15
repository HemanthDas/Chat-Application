const express = require("express");
const router = express.Router();
const limiter = require("../middleware/rateLimitter");
const { registerUser, loginUser } = require("../controllers/authController");
const { verifyOTP, sendOTP } = require("../controllers/otpController");
router.post("/register", registerUser);
router.post("/verifyotp", verifyOTP);
router.post("/verifyemail", limiter, sendOTP);
router.post("/login", limiter, loginUser);

module.exports = router;
