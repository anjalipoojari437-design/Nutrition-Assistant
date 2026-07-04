const express = require("express");

const router = express.Router();

const {
  saveHealthData,
  getHealthData,
} = require("../controllers/healthController");

// Save Health Data
router.post("/save", saveHealthData);

// Get Health Data
router.get("/:userId", getHealthData);

module.exports = router;