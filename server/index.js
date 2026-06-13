const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
const URL = "mongodb://localhost:27017/examprep";
const adminRoute = require("./routes/adminRoute");
mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(`err is ${err}`);
  });

//api started
app.use("/api/examinee", require("./routes/examineeRoute"));
app.use("/api/adminlogin/", adminRoute);
app.use("/api/subject", require("./routes/subjectRoute"));
//api ended

app.listen(5000, () => {
  console.log("Server connected  on http://localhost:5000");
});
