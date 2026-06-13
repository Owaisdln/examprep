const Admin = require("../models/Admin");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const admin = await new Admin(req.body);
  admin.save();

  return res.status(200).json("API Registered Successfully");
});

// Admin Login Route

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email });
  if (admin.password == password) {
    return res.json({
      Message: "Login Successfully",
      data: {
        admin: admin._id,
        role: "admin",
        email: admin.email,
      },
    });
  }

  return res.json(admin);
});

module.exports = router;
