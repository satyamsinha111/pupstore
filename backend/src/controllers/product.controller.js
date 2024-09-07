// controllers/productController.js
const Product = require('../collections/product.model');



// @desc    Create a new product
// @route   POST /api/products
// @access  Public
exports.createProduct = async (req, res) => {
    const { name, category, description, price, stock, imageUrl, brand, tags } = req.body;

    try {
        const product = new Product({
            name,
            category,
            description,
            price,
            stock,
            imageUrl,
            brand,
            tags,  // Handle tags here
        });

        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// @desc    Update a product by ID
// @route   PUT /api/products/:id
// @access  Public
exports.updateProduct = async (req, res) => {
    const { name, category, description, price, stock, imageUrl, brand, tags } = req.body;

    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.name = name || product.name;
        product.category = category || product.category;
        product.description = description || product.description;
        product.price = price || product.price;
        product.stock = stock || product.stock;
        product.imageUrl = imageUrl || product.imageUrl;
        product.brand = brand || product.brand;
        product.tags = tags || product.tags;  // Handle tags here

        await product.save();
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category').populate('reviews');
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Get a product by ID
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category').populate('reviews');

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
// @access  Public
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProductsTagFiltered = async (req, res) => {
    try {
        let query = {};

        if (req.query.tags) {
            query.tags = { $in: req.query.tags.split(',') };
        }

        const products = await Product.find(query).populate('category').populate('reviews');
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

