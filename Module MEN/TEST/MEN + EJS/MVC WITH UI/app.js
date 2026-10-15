require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));

app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
