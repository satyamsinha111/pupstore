// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller');
const { protect } = require('../middlewares/auth.middleware');

router.route('/')
    .post(protect, createProduct) // Protected route to create a product
    .get(getProducts); // Public route to get all products

router.route('/:id')
    .get(getProductById) // Public route to get a product by ID
    .put(protect, updateProduct) // Protected route to update a product
    .delete(protect, deleteProduct); // Protected route to delete a product

module.exports = router;
