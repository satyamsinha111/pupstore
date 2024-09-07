const multer = require('multer');
const path = require('path');
const fs = require('fs');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Specify the root directory as the destination
        cb(null, path.join(__dirname, '/'));
    },
    filename: (req, file, cb) => {
        // Specify the file name as the original file name
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = { upload }