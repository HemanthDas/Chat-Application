const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const Fuse = require("fuse.js");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/mailHandler");
const otpVerificationModel = require("../models/otpVerificationModel");
const generateOTP = require("../utils/otpGenerator");
const tokenGenerator = (_id) => {
  const jwtToken = jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  return jwtToken;
};
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(400).json("User already exists...");
    if (!username || !email || !password)
      return res.status(400).json("All fields are required...");
    if (!validator.isEmail(email))
      return res.status(400).json("Invalid email...");
    if (!validator.isStrongPassword(password))
      return res.status(400).json("Password is not strong enough...");
    user = new userModel({
      username,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(16);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = tokenGenerator(user._id);
    return res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json(err.message);
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json("All fields are required...");
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json("User does not exist...");
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json("Invalid password...");
    const token = tokenGenerator(user._id);
    return res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json(err.message);
  }
};
const findUser = async (req, res) => {
  try {
    const userid = req.params.userId;
    const user = await userModel.findById(userid);
    if (!user) return res.status(400).json("User does not exist...");
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
const fuseOptions = {
  keys: ["username", "email"],
  threshold: 0.3,
  isCaseSensitive: false,
  limit: 10,
};
const searchUser = async (req, res) => {
  try {
    const username = req.query.username || "";
    const users = await userModel.find();
    const fuse = new Fuse(users, fuseOptions);
    const result = fuse.search(username);
    if (result.length === 0) return res.status(400).json("User not found...");
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const verifyOTP = (req, res) => {
  sendOTP(req.body);
  return res.status(200).json("OTP verified...");
};
const sendOTP = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json("Email is required...");
  if (!validator.isEmail(email))
    return res.status(400).json("Invalid email...");
  const mail = await sendMail({
    from: {
      name: "noreply",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "OTP for Email Verification",
    text: `Your OTP is ${generateOTP()}`,
  });
  if(!mail) return res.status(500).json("Mail not sent...");
  return res.status(200).json("OTP sent to email...");
};
module.exports = {
  registerUser,
  loginUser,
  findUser,
  searchUser,
  verifyOTP,
  sendOTP,
};
