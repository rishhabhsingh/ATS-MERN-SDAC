const Product = require("../models/Product");

// show all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("products", { products });
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
};

// show add form
exports.showAddForm = (req, res) => {
  res.render("addProduct");
};

// save new product
exports.addProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.redirect("/products");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

// show edit form
exports.showEditForm = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render("editProduct", { product });
  } catch (err) {
    res.status(400).send("Invalid ID");
  }
};

// update product
exports.updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/products");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

// delete product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};
