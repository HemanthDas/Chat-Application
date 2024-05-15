const express = require("express");
const router = express.Router();
const { findUser, searchUser } = require("../controllers/usersController");
const verifyJWT = require("../middleware/verifyJWT");
router.use(verifyJWT);
router.get("/:userId/friends", (req, res) => {
  res.status(200).json("Friends...");
});
router.get("/find/:userId", findUser);
router.get("/search", searchUser);
module.exports = router;
