const Examinee = require("../models/Examinee");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const examinee = await Examinee.find();
  return res.json({ data: examinee });
});

router.post("/", async (req, res) => {
  const examinee = await new Examinee(req.body);
  examinee.save();
  return res.json({ message: "You are registered Successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const examinee = await Examinee.findOne({ email: email });
  if (!examinee) {
    return res.json({ message: "Your email is incorrect" });
  }
  if (examinee.password === password) {
    return res.json({
      message: "Login Successfully",
      user: {
        email: examinee.email,
        role: "user",
        id: examinee._id,
      },
    });
  }
});

// API ended
module.exports = router;
