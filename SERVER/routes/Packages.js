const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const Package = require('../models/Package');

// Create a new package
router.post('/postpackage', verifyToken, async (req, res) => {
    try {
        const { packageName, pkgDetails, price } = req.body;
        const newPackage = new Package({
            packageName,
            pkgDetails,
            price
        });
        await newPackage.save();
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all packages
router.get('/allPackages', verifyToken, async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a package by ID
router.get('/package/:id', verifyToken, async (req, res) => {
    try {
        const package = await Package.findById(req.params.id);
        if (!package) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.status(200).json(package);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a package by ID
router.put('/updatepackage/:id', verifyToken, async (req, res) => {
    try {
        const { packageName, pkgDetails, price } = req.body;
        const updatedPackage = await Package.findByIdAndUpdate(
            req.params.id,
            { packageName, pkgDetails, price },
            { new: true }
        );
        if (!updatedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.status(200).json(updatedPackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a package by ID
router.delete('/deletepackage/:id', verifyToken, async (req, res) => {
    try {
        const deletedPackage = await Package.findByIdAndDelete(req.params.id);
        if (!deletedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.status(200).json({ message: 'Package deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
