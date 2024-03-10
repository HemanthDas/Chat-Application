const sendMail = require("../utils/mailHandler");
const otpVerificationModel = require("../models/otpVerificationModel");
const userModel = require("../models/userModel");
const generateOTP = require("../utils/otpGenerator");
const validator = require("validator");
const { createHash, compareHash } = require("../utils/hasher");
require("dotenv").config();

//verify otp
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  const retrivedOTP = await otpVerificationModel.findOne({
    email,
  });
  if (!retrivedOTP) return res.status(400).json("OTP not found...");
  const isCorrect = await compareHash(otp, retrivedOTP.hashedOtp);
  if (!isCorrect) return res.status(400).json("Invalid OTP...");
  await otpVerificationModel.findOneAndDelete({ email });
  await userModel.findOneAndUpdate({ email }, { isVerified: true });
  return res.status(200).json("OTP verified...");
};

//verify email and send otp
const sendOTP = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json("Email is required...");
  if (!validator.isEmail(email))
    return res.status(400).json("Invalid email...");
  const user = await userModel.findOne({ email });
  if (!user) return res.status(400).json("User not found...");
  if (user.isVerified) return res.status(400).json("Email already verified...");
  let otp = generateOTP();
  const mail = await sendMail({
    from: {
      name: "noreply",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "OTP for Email Verification",
    text: `Your OTP is ${otp}`,
  });
  if (!mail)
    return res.status(500).json("Mail not sent...something error", mail);
  const isSent = await otpVerificationModel.find({ email });
  if (isSent) {
    await otpVerificationModel.findOneAndDelete({ email });
  }
  otp = await createHash(otp.toString());
  const newOTP = new otpVerificationModel({
    email,
    hashedOtp: otp,
  });
  await newOTP.save();
  return res.status(200).json("OTP sent to email...");
};

module.exports = { sendOTP, verifyOTP };
