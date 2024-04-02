const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Loggers
function accessLog(req, res, next) {
    const { hostname, method, path, ip, protocol } = req;
    console.log(`ACCESS: ${method} ${protocol}://${hostname}${path} - ${ip}`);
    next();
}

function errorLog(err, req, res, next) {
    const { hostname, method, path, protocol } = req;
    console.log(`ERROR: ${method} ${protocol}://${hostname}${path} - ${err}`);
    // next(); // you can call either next or send a uniform error response
    res.status(500).send({ status: "server-error", message: err.message });
}

// 用户认证
function authenticateUser(req, res, next) {
    // Exclude base routes from authentication
    if (req.path === '/' || req.path === '/api' || req.path === '/api/users/login') {
        return next();
    }

    // Get the token from the request
    const token = req.cookies.authToken;
    if (!token) {
        return res.status(401).send({ status: "unauthorized", message: "Unauthorized access" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, dotenv.config().parsed.JWT_SECRET);
        req.user = decoded; // Optionally attach user info to the request
        next(); // Token is valid, proceed to the next middleware or route handler
    } catch (error) {
        // Token verification failed
        return res.status(403).send({ status: "forbidden", message: "Invalid token" });
    }
}

// TODO 用户权限检查
function verifyRoles(req, res, next) {
    const { roles } = req.user;
    if (roles.includes('admin')) {
        next();
    } else {
        res.status(403).send({ status: "forbidden", message: "You do not have the required permissions" });
    }
}

// 
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

// 
function rateLimiter(req, res, next) {
    // Implement rate limiting
}

//
function compression(req, res, next) {
    // Implement compression
}

//

module.exports = {
    accessLog,
    errorLog,
    errorHandler,
    verifyRoles,
    authenticateUser,
    rateLimiter,
    compression
}

// TODO - Other middleware functions
// Set Cors and Cache headers
// Route Guards
// Rate Limiting
// Body Parser
// Cookie Parser
// Security - helmet, xss, etc
// Compression - compression
