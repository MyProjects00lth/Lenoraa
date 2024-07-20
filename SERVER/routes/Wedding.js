const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const Wedding = require('../models/Wedding');

// Create a new wedding
router.post('/postwedding', verifyToken, async (req, res) => {
    try {
        const { couples, date, description, videoLink } = req.body;
        const newWedding = new Wedding({
            couples,
            date,
            description,
            videoLink
        });
        await newWedding.save();
        res.status(201).json(newWedding);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all weddings
router.get('/allWedding',verifyToken, async (req, res) => {
    try {
        const weddings = await Wedding.find();
        res.status(200).json(weddings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all weddings for frontend
router.get('/allEvents', async (req, res) => {
    try {
        const weddings = await Wedding.find();
        res.status(200).json(weddings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a wedding by ID
router.get('/wedding/:id',verifyToken, async (req, res) => {
    try {
        const wedding = await Wedding.findById(req.params.id);
        if (!wedding) {
            return res.status(404).json({ message: 'Wedding not found' });
        }
        res.status(200).json(wedding);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a wedding by ID
router.put('/updatewedding/:id',verifyToken, async (req, res) => {
    try {
        const { couples, date, description, videoLink } = req.body;
        const updatedWedding = await Wedding.findByIdAndUpdate(
            req.params.id,
            { couples, date, description, videoLink },
            { new: true }
        );
        if (!updatedWedding) {
            return res.status(404).json({ message: 'Wedding not found' });
        }
        res.status(200).json(updatedWedding);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a wedding by ID
router.delete('/deletewedding/:id',verifyToken, async (req, res) => {
    try {
        const deletedWedding = await Wedding.findByIdAndDelete(req.params.id);
        if (!deletedWedding) {
            return res.status(404).json({ message: 'Wedding not found' });
        }
        res.status(200).json({ message: 'Wedding deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
