const User = require("../models/user");
class AuthController {
  async register(req, res) {
    const { email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    const user = new User({ email, password });
    await user.save();
    res.json({ message: "User Created" });
  }
}
module.exports = new AuthController();
