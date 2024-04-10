/**
 * @fileoverview This is a controller file that contains user controller functions.
 */


const users = require('../services/users.service');

const getUsers = async (req, res, next) => {
    try {
        // Authorize user
        // if (!users.isAdmin(req)) {
        //     throw new Error('Unauthorized');
        // }

        const allUsers = await users.getUsers();
        res.send(allUsers);
    } catch (error) {
        console.error("getUsers controller error: ", error);
        next(err);
    }
}

const getUser = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const user = await users.getUserById(userId);
        res.send(user);
    } catch (error) {
        console.error("getUser controller error: ", error);
        res.status(401).send({ error: error.message });
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        const token = await users.login(req.body.username, req.body.password);

        res.cookie('authToken', token, {
            httpOnly: true, // The cookie is not accessible via JavaScript
            // secure: process.env.NODE_ENV !== 'development', // In production, set secure to true to send over HTTPS
            secure: false,  // In production, set secure to true to send over HTTPS
            sameSite: 'Strict', // Strictly limit to same site requests
            expires: new Date(Date.now() + 3600000) // 1 hour cookie expiration
        });

        res.status(200).send({ "message": "Successfully logged in" });
    } catch (error) {
        console.error("login controller error: ", error);
        res.status(400).send({ error: error.message });
        next(err);
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('authToken');
        res.status(200).send({ "message": "Successfully logged out" });
    } catch (error) {
        console.error("logout controller error: ", error);
        res.status(400).send({ error: error.message });
    }
}

module.exports = {
    getUsers,
    getUser,
    login,
    logout
}
