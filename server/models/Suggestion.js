const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema(
  {
    bmi: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    suggestion: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Suggestion", suggestionSchema);