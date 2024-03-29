const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Import Models
const UserModel = require('../models/userModel');


const getUsers = async () => {
    // Get all users
    const users = await UserModel.findAll();
    return users;
};

const login = async (username, password) => {
    // Validate user credentials and return a token
    const user = await getUserByUsername(username);
    if (!user) {
        throw new Error('User not found');
    }

    // TODO Encrypted passwords
    // const validPassword = await bcrypt.compare(password, user.password);
    // Without bcrypt
    const validPassword = password === user.password;

    if (!validPassword) {
        throw new Error('Invalid password');
    }

    // Generate a token for the user
    const token = jwt.sign({ userId: user.user_id }, dotenv.config().parsed.JWT_SECRET, { expiresIn: '1h' });

    return token;
};

const getUserByUsername = async (username) => {
    const user = await UserModel.findByUsername(username);
    return user;
};


const authenticateUser = async (token) => {
    // Verify token against user credentials
    if (!token) {
        throw new Error('Token not provided');
    }

    jwt.verify(token, dotenv.config().parsed.JWT_SECRET, (err, decoded) => {
        if (err) {
            throw new Error('Invalid token');
        }
        console.log(decoded);
        return decoded.user_id;
    });
};


const registerUser = async (userData) => {
    // Validate userData, hash password, and save to database
};


const updateUserProfile = async (userId, newProfileData) => {
    // Update user profile information
};

const getUserById = async (userId) => {
    // Fetch a single user by ID
};

const deleteUser = async (userId) => {
    // Delete a user and handle related cleanup
};

module.exports = {
    getUsers,
    login,
    registerUser,
    authenticateUser,
    updateUserProfile,
    getUserById,
    deleteUser,
};