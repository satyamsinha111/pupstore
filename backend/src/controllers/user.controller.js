// controllers/userController.js
const User = require('../collections/user.model');
const fs = require('fs');
const path = require('path');

// @desc    Create a new user
// @route   POST /api/users
// @access  Public
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// @desc    Get all users
// @route   GET /api/users
// @access  Public
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Get a user by ID
// @route   GET /api/users/:id
// @access  Public
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Update a user by ID
// @route   PUT /api/users/:id
// @access  Public
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// @desc    Delete a user by ID
// @route   DELETE /api/users/:id
// @access  Public
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.searchByAddress = async (req, res) => {
    try {
        const { searchTxt } = req.body;
        const results = await User.find({ $text: { $search: searchTxt } })
        res.status(200).json({ data: results });
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

exports.importCsvFile = async (req, res) => {
    try {
        // Check if a file was uploaded
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const rootPath = path.resolve(__dirname, '../../'); // Adjust the number of '..' as needed
        console.log("Root path ",rootPath)

        // Get the path to the uploaded file
        const filePath = path.join(`${rootPath}/uploads`, req.file.path);
        console.log("EEEEEE",filePath,"|",req.file.path);

        // Read and parse the JSON file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).send('Error reading the file 12.');
            }

            try {
                const jsonData = JSON.parse(data);
                // Process the JSON data as needed
                res.json({ message: 'File uploaded and parsed successfully.', data: jsonData });
            } catch (parseErr) {
                res.status(400).send('Invalid JSON format.');
            }

            // Optional: Delete the file after processing
            fs.unlink(filePath, (err) => {
                if (err) console.error('Error deleting the file:', err);
            });
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}