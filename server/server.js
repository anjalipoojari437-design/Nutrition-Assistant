require("dotenv").config();

const express=require("express");
const cors=require("cors");

const connectDB=require("./db/config");

const userRoutes=require("./routes/userRoute");
const suggestionRoutes=require("./routes/suggestionRoute");

const app=express();

connectDB().then(() => {
  console.log("DB Connection Attempt Finished");
});

app.use(cors());

app.use(express.json());

app.use("/api/users",userRoutes);

app.use("/api/suggestions",suggestionRoutes);

app.get("/", (req, res) => {
  res.send("Nutrition Assistant Backend Running");
});

const PORT=process.env.PORT||8000;

app.listen(PORT,()=>{

console.log(`Server running on port ${PORT}`);

});