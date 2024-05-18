const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
    const { place, area, bedrooms, bathrooms, nearby } = req.body;
    try {
        const property = new Property({ place, area, bedrooms, bathrooms, nearby, owner: req.user.id });
        await property.save();
        res.status(201).json({ message: 'Property posted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('owner');
        res.json(property);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(property);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteProperty = async (req, res) => {
    try {
        await Property.findByIdAndDelete(req.params.id);
        res.json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPropertiesByOwner = async (req, res) => {
    try {
        const properties = await Property.find({ owner: req.params.ownerId });
        res.json(properties);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};