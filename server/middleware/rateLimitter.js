const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  handler: (req, res, next) => {
    res
      .status(429)
      .json({ message: "Too many requests, please try again later" });
  },
});
module.exports = limiter;
