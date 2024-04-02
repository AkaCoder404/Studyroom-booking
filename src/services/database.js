// Database
const mysql = require('mysql2/promise');

// Get from .env file
const dotenv = require('dotenv');
dotenv.config();

console.log(`MySQL is running at ${dotenv.config().parsed.MYSQL_HOST}`);

// Connect to the database
const pool = mysql.createPool({
    host: dotenv.config().parsed.MYSQL_HOST,
    user: dotenv.config().parsed.MYSQL_ROOT_USER,
    password: dotenv.config().parsed.MYSQL_ROOT_PASSWORD,
    database: dotenv.config().parsed.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;