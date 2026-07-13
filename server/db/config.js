const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log("FULL ERROR:");
    console.log(err);
  }
};

module.exports = connectDB;