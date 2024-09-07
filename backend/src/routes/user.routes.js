// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    importCsvFile
} = require('../controllers/user.controller');
const multer = require("../config/multer.config")

router.route('/').post(createUser).get(getUsers);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/upload-data').post(multer.upload.single("jsonFile"),importCsvFile)

module.exports = router;
