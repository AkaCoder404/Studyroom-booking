const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

const { accessLog, errorLog, checkAdmin, errorHandler } = require('../middleware/index.js');
const userRoutes = require('./user');
const bookingRoutes = require('./booking');

app.use(express.json());
app.use(cookieParser());
app.use(accessLog);

// Use the routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);

// Add the errorHandler middleware
app.use(errorLog);

// Default routes
app.get('/api/', (req, res) => {
    res.send('Welcome to Study Room Booking backend!');
});


// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


