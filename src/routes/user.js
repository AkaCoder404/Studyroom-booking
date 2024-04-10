const express = require('express');
const router = express.Router();
// const { getUsers, login, authenticateUser, getUserById, isAdmin } = require('../services/users.service.js');,
const { getUsers, getUser, login, logout } = require('../controllers/users.controller.js')



router.post('/login', login); // 登入
router.get('/logout', logout); // 登出
router.get('/get_users', getUsers); // 获取所有用户, 只能管理员访问
router.get('/get_user', getUser); // 获取用户信息

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