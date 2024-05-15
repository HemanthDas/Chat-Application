const userModel = require("../models/userModel");
require("dotenv").config();
const Fuse = require("fuse.js");

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
  findUser,
  searchUser,
};
