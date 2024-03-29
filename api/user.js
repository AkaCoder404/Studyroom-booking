const express = require('express');
const router = express.Router();
const { getUsers, login, authenticateUser } = require('../services/userService');


// Get a list of users
router.get('/', async (req, res) => {
    users = await getUsers();
    res.send(users);
});

// Login to user account
router.post('/login', async (req, res) => {
    // Check if username and password are valid
    try {
        const { username, password } = req.body;
        const token = await login(username, password);
        // Send back the token
        res.cookie('token', token, {
            httpOnly: true, // The cookie is not accessible via JavaScript
            secure: process.env.NODE_ENV !== 'development', // In production, set secure to true to send over HTTPS
            sameSite: 'strict', // Strictly limit to same site requests
            expires: new Date(Date.now() + 3600000) // 1 hour cookie expiration
        });

        res.status(200).send({
            "token": token,
            "message": "Successfully logged in"
        });
    }
    catch (error) {
        res.status(401).send({ error: error.message });
    }
});

// TODO Check if user is already logged in
router.get('/authenticate', async (req, res) => {
    const token = req.cookies.token;
    try {
        const user = await authenticateUser(token);
        res.status(200).send({ "message": "User is authenticated" });
    }
    catch (error) {
        res.status(401).send({ error: error.message });
    }
});


// Make appointment
router.get('/makeappointment', async (req, res, next) => {
    const err = new Error('Feature not implemented yet');
    next(err);
});

// 


module.exports = router;