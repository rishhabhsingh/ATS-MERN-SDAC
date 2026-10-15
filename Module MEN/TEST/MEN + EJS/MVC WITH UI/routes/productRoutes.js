const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.get("/add", productController.showAddForm);
router.post("/add", productController.addProduct);
router.get("/edit/:id", productController.showEditForm);
router.post("/edit/:id", productController.updateProduct);
router.post("/delete/:id", productController.deleteProduct);

module.exports = router;
