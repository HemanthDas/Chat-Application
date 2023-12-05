import express from "express";
import dotenv from "dotenv"; // Add this line
const app = express();
dotenv.config();

app.listen(3000, () => console.log("Server running on port 3000"));
app.use((req, res, next) => {
  console.log("middleware");
  console.log()
  next();
});
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
