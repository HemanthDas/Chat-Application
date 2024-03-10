const jwt = require("jsonwebtoken");
const tokenGenerator = (_id) => {
  const jwtToken = jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  return jwtToken;
};
module.exports = tokenGenerator;
