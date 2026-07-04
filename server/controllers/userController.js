const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, age, gender, height, weight, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      age,
      gender,
      height,
      weight,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Registration Successful",
      user,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  res.json({
    message: "Login API Coming Soon",
  });
};

// Get Profile
const getProfile = async (req, res) => {
  res.json({
    message: "Profile API Coming Soon",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};