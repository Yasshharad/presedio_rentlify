const express = require('express');
const { createProperty, getProperties, getProperty, updateProperty, deleteProperty, getPropertiesByOwner } = require('../controllers/propertyController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .get(getProperties)
    .post(protect, createProperty);

router.route('/:id')
    .get(getProperty)
    .put(updateProperty)
    .delete(deleteProperty);

router.get('/properties/owner/:ownerId', getPropertiesByOwner);

module.exports = router;
