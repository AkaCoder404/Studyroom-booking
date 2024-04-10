// Database
const mysql = require('mysql2/promise');

// Get from .env file
const config = require('./configs/index.config');

console.log(`MySQL is running at ${config.mysql.host}:${config.mysql.port}`);

// Connect to the database
const pool = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    port: config.mysql.port,
    password: config.mysql.password,
    database: config.mysql.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;