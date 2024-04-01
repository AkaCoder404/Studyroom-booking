const express = require('express');
const router = express.Router();
const { getUsers, login, authenticateUser, getUserById } = require('../services/userService');

// 获取所有用户
router.get('/', async (req, res) => {
    users = await getUsers();
    res.send(users);
});

// 登入
router.post('/login', async (req, res) => {
    // Check if username and password are valid
    try {
        const { username, password } = req.body;
        const token = await login(username, password);

        // Send back the token
        res.cookie('authToken', token, {
            httpOnly: true, // The cookie is not accessible via JavaScript
            // secure: process.env.NODE_ENV !== 'development', // In production, set secure to true to send over HTTPS
            secure: false, // In production, set secure to true to send over HTTPS
            sameSite: 'strict', // Strictly limit to same site requests
            expires: new Date(Date.now() + 3600000) // 1 hour cookie expiration
        });

        res.status(200).send({
            "message": "Successfully logged in"
        });
    }
    catch (error) {
        res.status(401).send({ error: error.message });
    }
});

// 获取用户信息
router.get('/profile', async (req, res) => {
    try {
        // Authenticate user
        const token = req.cookies.authToken;
        const userId = await authenticateUser(token);
        // Get user profile
        const user = await getUserById(userId);
        res.send(user);
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
});

// TODO Seperate user services and booking services
// 预约座位
router.get('/makeappointment', async (req, res, next) => {
    const err = new Error('Feature not implemented yet');
    next(err);
});

// 获取预约信息
router.get('/appointments', async (req, res, next) => {
    const err = new Error('Feature not implemented yet');
    next(err);
});


module.exports = router;