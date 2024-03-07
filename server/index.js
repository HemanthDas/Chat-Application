const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoute");
const app = express();
const port = process.env.PORT || 5000;
const url = process.env.ATLAS_URI;
mongoose
  .connect(url)
  .then(() => {
    console.log("Connection Established");
  })
  .catch((err) => {
    console.error(err);
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
app.use("api/users", userRoutes);
