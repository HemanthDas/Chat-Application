const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // For hashing OTP

const otpVerificationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  hashedOtp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 300000,
    default: Date.now,
  },
});

const otpVerificationModel = mongoose.model(
  "OtpVerification",
  otpVerificationSchema
);
module.exports = otpVerificationModel;
