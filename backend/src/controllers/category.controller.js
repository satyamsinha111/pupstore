// controllers/categoryController.js
const Category = require('../collections/category.model');

// @desc    Create a new category
// @route   POST /api/categories
// @access  Public
exports.createCategory = async (req, res) => {
    const { name, description } = req.body;

    try {
        const categoryExists = await Category.findOne({ name });

        if (categoryExists) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        const category = new Category({
            name,
            description,
        });

        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Get a category by ID
// @route   GET /api/categories/:id
// @access  Public
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Update a category by ID
// @route   PUT /api/categories/:id
// @access  Public
exports.updateCategory = async (req, res) => {
    const { name, description } = req.body;

    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        category.name = name || category.name;
        category.description = description || category.description;

        await category.save();
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// @desc    Delete a category by ID
// @route   DELETE /api/categories/:id
// @access  Public
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({ message: 'Category deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.findCategoryByText = async (req,res)=>{
    try {
        const { searchTxt  } = req.body;
        const results = await Category.find({$text:{$search:searchTxt}});
        res.status(200).json({
            data:results
        })
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}