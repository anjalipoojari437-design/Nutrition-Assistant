const mongoose = require("mongoose");

const uri = "mongodb+srv://challappamanasa2005_db_user:iL1CjRxVHcARg6mT@cluster0.ecolgtu.mongodb.net/nutrition_assistant?retryWrites=true&w=majority&appName=Cluster0;"

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB Connected!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });