const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "google",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendMail = async (mailOptions) => {
  const info = await transporter.sendMail(mailOptions);
  return info;
};
module.exports = sendMail;
