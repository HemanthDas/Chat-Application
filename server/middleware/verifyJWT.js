const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const verifyJWT = async (req, res, next) => {
  const token = req.header("user-auth-token");
  if (!token)
    return res.status(401).json("Access denied. No token provided...");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(400)
      .json("Unauthorized Token Found. Please Login Again...");
  }
};
module.exports = verifyJWT;
