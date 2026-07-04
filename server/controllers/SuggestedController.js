const Suggestion = require("../models/Suggestion");
const suggestNutrition = require("../utils/suggestNutrition");

const getSuggestion = async (req, res) => {
  try {
    const { bmi } = req.body;

    const suggestionText = suggestNutrition(bmi);

    const savedSuggestion = await Suggestion.create({
      bmi,
      category:
        bmi < 18.5
          ? "Underweight"
          : bmi < 25
          ? "Normal"
          : bmi < 30
          ? "Overweight"
          : "Obese",
      suggestion: suggestionText,
    });

    res.status(200).json({
      success: true,
      suggestion: savedSuggestion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getSuggestion,
};