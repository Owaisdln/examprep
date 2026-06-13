require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const URL = process.env.MONGO_URI || "mongodb://localhost:27017/examprep";

const adminRoute = require("./routes/adminRoute");

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(`err is ${err}`);
  });

// api started
app.use("/api/examinee", require("./routes/examineeRoute"));
app.use("/api/adminlogin/", adminRoute);
app.use("/api/subject", require("./routes/subjectRoute"));
// api ended

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;

