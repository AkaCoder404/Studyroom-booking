//
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const { accessLog, errorLog, checkAdmin, errorHandler } = require('./middleware/index.js');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(accessLog);

const apiRoutes = require('./api/index.js');
app.use('/api', apiRoutes);

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
