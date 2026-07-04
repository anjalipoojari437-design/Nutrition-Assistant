const HealthData = require("../models/HealthData");

// Save Health Data
const saveHealthData = async (req, res) => {
  try {

    const {
      userId,
      age,
      gender,
      height,
      weight,
      activity,
      goal,
      bmi,
    } = req.body;

    const existing = await HealthData.findOne({ userId });

    if (existing) {

      existing.age = age;
      existing.gender = gender;
      existing.height = height;
      existing.weight = weight;
      existing.activity = activity;
      existing.goal = goal;
      existing.bmi = bmi;

      await existing.save();

      return res.json({
        message: "Health Data Updated Successfully",
      });

    }

    await HealthData.create({
      userId,
      age,
      gender,
      height,
      weight,
      activity,
      goal,
      bmi,
    });

    res.status(201).json({
      message: "Health Data Saved Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get Health Data
const getHealthData = async (req, res) => {

  try {

    const data = await HealthData.findOne({
      userId: req.params.userId,
    });

    res.json(data);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  saveHealthData,
  getHealthData,
};