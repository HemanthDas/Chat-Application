const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  findUser,
  searchUser,
} = require("../controllers/usersController");
const { verifyOTP, sendOTP } = require("../controllers/otpController");
const limiter = require("../middleware/rateLimitter");
const verifyJWT = require("../middleware/verifyJWT");
router.post("/register", registerUser);
router.post("/verifyotp", verifyOTP);
router.post("/verifyemail", limiter, sendOTP);
router.post("/login", limiter, loginUser);
router.get("/find/:userId", verifyJWT, findUser);
router.get("/checkauth", verifyJWT, (req, res) => {
  res.status(200).json("Authenticated...");
});
router.get("/search", searchUser);
module.exports = router;
