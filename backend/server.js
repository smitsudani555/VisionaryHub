const express = require("express");
const connectDB = require("./config/db"); // Import database connection
const authRoutes = require("./routes/authRoutes"); // Import authentication routes
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use authentication routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
