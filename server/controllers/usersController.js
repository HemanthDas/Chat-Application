const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const Fuse = require("fuse.js");
const validator = require("validator");
const tokenGenerator = require("../utils/tokenGenerator");
const { compareHash, createHash } = require("../utils/hasher");

//register user
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
      isVerified: false,
      password,
    });
    user.password = await createHash(user.password);
    await user.save();
    const token = tokenGenerator(user._id);
    return res.status(200).json({
      _id: user._id,
      username: user.username,
      isVerified: user.isVerified,
      email: user.email,
      token,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json(err.message + "error");
  }
};

//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json("All fields are required...");
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json("User does not exist...");
    const validPassword = await compareHash(password, user.password);
    if (!validPassword) return res.status(400).json("Invalid password...");
    const token = tokenGenerator(user._id);
    return res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isVerified: user.isVerified,
      token,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json(err.message);
  }
};
//find user
const findUser = async (req, res) => {
  try {
    const userid = req.params.userId;
    const user = await userModel.findById(userid).select("username email");
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
    const users = await userModel.find().select("username email");
    const fuse = new Fuse(users, fuseOptions);
    const result = fuse.search(username);
    if (result.length === 0) return res.status(400).json("User not found...");
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
module.exports = {
  registerUser,
  loginUser,
  findUser,
  searchUser,
};
