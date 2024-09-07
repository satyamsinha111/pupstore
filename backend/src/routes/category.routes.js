// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    findCategoryByText
} = require('../controllers/category.controller');

const { protect } = require("../middlewares/auth.middleware")

router.route('/').post(protect,createCategory).get(protect,getCategories);
router.route('/:id').get(protect,getCategoryById).put(protect,updateCategory).delete(protect,deleteCategory);
router.route('/search').get(protect,findCategoryByText);

module.exports = router;
