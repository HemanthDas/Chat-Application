const bcrypt = require("bcryptjs");
const createHash = async (value) => {
  const salt = await bcrypt.genSalt(16);
  const hash = await bcrypt.hash(value, salt);
  return hash;
};

const compareHash = async (value, hash) => {
  return await bcrypt.compare(value, hash);
};
module.exports = { createHash, compareHash };
