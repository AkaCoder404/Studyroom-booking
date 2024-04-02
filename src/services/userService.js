const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Import Models
const UserModel = require('../models/userModel');

const getUsers = async () => {
    // Get all users from the database
    const users = await UserModel.findAll();
    return users;
};

// Service to login a user
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
    const token = generateToken(user.user_id, user.role);
    return token;
};

// Service to generate a token
const generateToken = (userId, userRole) => {
    const token = jwt.sign({ userId, userRole }, dotenv.config().parsed.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

// Service to check if user is an admin
const isAdmin = (user) => {
    return user.role === 'admin';
}

// Service to get a user by username
const getUserByUsername = async (username) => {
    const user = await UserModel.findByUsername(username);
    return user;
};

// Service to get a user by ID
const getUserById = async (userId) => {
    const user = await UserModel.findById(userId);
    return user;
}

// Service to verify a user's token
const authenticateUser = (token) => {
    if (!token) {
        throw new Error('Token not provided');
    }

    const decoded = jwt.verify(token, dotenv.config().parsed.JWT_SECRET);
    if (!decoded) {
        throw new Error('Invalid token');
    }
    return decoded.userId;
};


const registerUser = async (userData) => {
    // Validate userData, hash password, and save to database
};


const updateUserProfile = async (userId, newProfileData) => {
    // Update user profile information
};

const deleteUser = async (userId) => {
    // Delete a user and handle related cleanup
};

module.exports = {
    getUsers,
    login,
    registerUser,
    authenticateUser,
    isAdmin,
    updateUserProfile,
    getUserById,
    deleteUser,
};