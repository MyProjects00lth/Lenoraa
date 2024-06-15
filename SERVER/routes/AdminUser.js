const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifyToken');
const AdminUser = require('../models/AdminUser');

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new AdminUser({
            name: name,
            email: email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AdminUser.findOne({ email: email });
        if (!user) return res.status(404).json({ message: 'User not found.' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ auth: false, token: null, message: 'Invalid password.' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 86400 });
        res.status(200).json({ auth: true, token: token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Edit user details
router.put('/edituser', verifyToken, async (req, res) => {
    try {
        const userId = req.userId;
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await AdminUser.findByIdAndUpdate(userId, { name: name, email: email, password: hashedPassword });
        res.status(200).json({ message: 'User details updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve user data
router.get('/details/:id', verifyToken, async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await AdminUser.findById(userId, '-password'); // Exclude password from response
        if (!user) return res.status(404).json({ message: 'User not found.' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;