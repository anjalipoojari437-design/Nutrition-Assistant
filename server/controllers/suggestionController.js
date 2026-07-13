const Suggestion = require("../models/Suggestion");
const suggestNutrition = require("../utils/suggestNutrition");

exports.createSuggestion = async (req, res) => {
  try {
    const { disease, userId } = req.body;

    if (!disease) {
      return res.status(400).json({
        message: "Disease is required"
      });
    }

    const diet = suggestNutrition(disease);

    const data = await Suggestion.create({
      user: userId,
      disease,
      suggestion: diet
    });

    res.status(201).json(data);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

exports.getSuggestions = async (req, res) => {
  try {
    const data = await Suggestion.find().populate("user");
    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};