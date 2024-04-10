/**
 * @fileoverview This is the entry point of the application.
 * 
 * 
 */

const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const config = require('./configs/index.config.js');
const {
    accessLog,
    errorLog,
    // errorHandler,
    // verifyRoles,
    authenticateUser,
    // rateLimiter,
    // compression
} = require('./middleware.js');

const app = express();
const port = config.port;

app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
// app.use(cors({ origin: '*', credentials: true }));
app.use(cors({ origin: "http://cloud.gutemorgan.com:3001", credentials: true }));
app.use(accessLog);
app.use(authenticateUser);

const apiRoutes = require('./routes/index.js');
app.use('/api', apiRoutes);


// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to Study Room Booking backend! Go to api/ for the API');
});

// API Routes
app.get('/api/', (req, res) => {
    res.send('Welcome to the API! Here is a list of available routes: /users, /bookings');
});


// Add the errorHandler middleware
app.use(errorLog);

// Start the server
app.listen(port, () => {
    console.log(`Studyroombooking is listening at http://localhost:${port}`);
});
