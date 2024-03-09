const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  findUser,
  searchUser,
  sendOTP,
  verifyOTP,
} = require("../controllers/usersController");
router.post("/register", registerUser);
router.post("/verifyotp", verifyOTP);
router.post("/verifyEmail", sendOTP);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);
router.get("/search", searchUser);
module.exports = router;
