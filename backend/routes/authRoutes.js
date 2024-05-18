const express = require('express');
const { register, login, getUserData, getUserById } = require('../controllers/authController'); // Corrected import
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', authMiddleware.protect, getUserData);
router.get('/users/:userId', getUserById);

module.exports = router;
