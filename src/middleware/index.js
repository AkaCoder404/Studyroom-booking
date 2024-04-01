
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
    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send({ status: "unauthorized", message: "Unauthorized access" });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send({ status: "forbidden", message: "Invalid token" });
        }
        req.user = user;
        next();
    });
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

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

module.exports = {
    accessLog,
    errorLog,
    verifyRoles,
    errorHandler
}

// TODO - Other middleware functions
// Set Cors and Cache headers
// Route Guards
// Rate Limiting
// Body Parser
// Cookie Parser
// Security - helmet, xss, etc
// Compression - compression
