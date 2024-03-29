
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


// TODO Check if user is admin with tokens
function checkAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(401).send({ error: 'Unauthorized' });
    }
    next(); // Move to the next middleware or route handler
}

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

module.exports = {
    accessLog,
    errorLog,
    checkAdmin,
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
