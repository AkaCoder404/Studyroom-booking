/**
 * @fileoverview This is a configuration file that contains the index configuration.
 * 
 */

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    mysql: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_ROOT_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET,
    }
}
