// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signupUser, signinUser } = require('../controllers/auth.controller');

router.post('/signup', signupUser);
router.post('/signin', signinUser);

module.exports = router;
