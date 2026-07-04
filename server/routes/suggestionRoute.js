const express = require("express");
const router = express.Router();

const {
  getSuggestion,
} = require("../controllers/SuggestedController");

router.post("/", getSuggestion);

module.exports = router;