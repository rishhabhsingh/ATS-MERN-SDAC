const express = require("express");
const app = express();

app.set("view engine", "ejs");

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000 },
  { id: 2, name: "Mobile", category: "Electronics", price: 20000 },
  { id: 3, name: "Headphones", category: "Accessories", price: 1500 },
  { id: 4, name: "Keyboard", category: "Accessories", price: 2500 },
];

app.get("/", (req, res) => {
  res.render("products", { products: products });
});

app.listen(3000, () => console.log("Server running on port 3000"));
