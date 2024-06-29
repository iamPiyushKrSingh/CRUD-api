const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// get all products
router.get("/", getProducts);

// get a product by id
router.get("/:id", getProduct);

// create a new product
router.post("/", createProduct);

// update a product by id
router.patch("/:id", updateProduct);

// delete a product by id
router.delete("/:id", deleteProduct);

module.exports = router;
