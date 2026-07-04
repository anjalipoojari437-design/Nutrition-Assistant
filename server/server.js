require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/config");

// Routes
const userRoutes = require("./routes/userRoute");
const suggestionRoutes = require("./routes/suggestionRoute");
const healthRoutes = require("./routes/healthRoute");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/suggestions", suggestionRoutes);
app.use("/api/health", healthRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🥗 Nutrition Assistant API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});