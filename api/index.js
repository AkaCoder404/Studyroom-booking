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

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to Study Room Booking backend! Go to api/ for the API');
});

// API Routes
app.get('/api/', (req, res) => {
    res.send('Welcome to the API! Here is a list of available routes: /users, /bookings');
});


// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


