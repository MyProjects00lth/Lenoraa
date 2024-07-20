const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const Package = require('../models/OneDayFHDPkg');

// Create a new package
router.post('/postpackage' , async (req, res) => {
    try {
        const { basic, silver, gold, platinum, goingAway, droneCamera, highlightVideo, pendriver16, pendriver32, pendriver64 } = req.body;
        const newPackage = new Package({
            basic, silver, gold, platinum, goingAway, droneCamera, highlightVideo, pendriver16, pendriver32, pendriver64
        });
        await newPackage.save();
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all packages
router.get('/allPackages', async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a package by ID
router.get('/package/:id', async (req, res) => {
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
router.put('/updatepackage/:id', async (req, res) => {
    try {
        const { basic, silver, gold, platinum, goingAway, droneCamera, highlightVideo, pendriver16, pendriver32, pendriver64 } = req.body;
        const updatedPackage = await Package.findByIdAndUpdate(
            req.params.id,
            { basic, silver, gold, platinum, goingAway, droneCamera, highlightVideo, pendriver16, pendriver32, pendriver64 },
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

module.exports = router;