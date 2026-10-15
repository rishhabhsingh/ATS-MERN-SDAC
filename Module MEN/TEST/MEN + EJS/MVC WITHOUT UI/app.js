require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/students", studentRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
