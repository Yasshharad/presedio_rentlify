const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    place: { type: String, required: true },
    area: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    nearby: { type: [String], required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
