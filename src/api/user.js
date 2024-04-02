const express = require('express');
const router = express.Router();
const { getUsers, login, authenticateUser, getUserById, isAdmin } = require('../services/userService');

// 获取所有用户, 只能管理员访问
router.get('/', async (req, res) => {
    try {
        // Authorize user
        if (!isAdmin(req)) {
            throw new Error('Unauthorized');
        }
        users = await getUsers();
        res.send(users);
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
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

// 登出
router.get('/logout', async (req, res) => {
    res.clearCookie('authToken');
    res.status(200).send({ "message": "Successfully logged out" });
});

// 获取用户信息
router.get('/profile', async (req, res) => {
    try {
        const userId = req.user.userId;
        const user = await getUserById(userId);
        res.send(user);
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
});

// TODO User can checkin to a room with QR code
router.post('/qr', async (req, res) => {
    const err = new Error('Feature not implemented yet');
    next(err);
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