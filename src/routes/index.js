const express = require('express');
const router = express.Router();

const userRoutes = require('./user.js');
const bookingRoutes = require('./booking.js');

// Use the routes
router.use('/users', userRoutes);
router.use('/bookings', bookingRoutes);

module.exports = router;