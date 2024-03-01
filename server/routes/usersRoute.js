const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  findUser,
  searchUser,
} = require("../controllers/usersController");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);
router.get("/search?username", searchUser);
