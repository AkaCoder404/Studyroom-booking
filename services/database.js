// Database
const mysql = require('mysql2/promise');

// Get from .env file
const dotenv = require('dotenv');
dotenv.config();

console.log(dotenv.config().parsed.DB_HOST);

// Connect to the database
const pool = mysql.createPool({
    host: dotenv.config().parsed.DB_HOST,
    user: dotenv.config().parsed.DB_USERNAME,
    password: dotenv.config().parsed.DB_PASSWORD,
    database: dotenv.config().parsed.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;