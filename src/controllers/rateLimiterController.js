// Import the Redis client utility
const redisClient = require('../utils/redisClient');

// Middleware function to implement rate limiting
exports.rateLimiter = async (req, res, next) => {
    // Extract the IP address from the request object
    const { ip } = req;
    try {
        // Increment the request count for the IP address
        const currentRequestCount = await redisClient.incr(ip);
        
        // If this is the first request from the IP, set an expiry for the count in Redis
        if (currentRequestCount === 1) {
            await redisClient.expire(ip, 60); // Set expiry to 60 seconds
        }
        
        // If the request count exceeds the limit (e.g., 100 requests per minute per IP), send a rate limit error
        if (currentRequestCount > 100) { // Assuming limit is 100 requests per minute per IP
            return res.status(429).json({ message: 'Too Many Requests' });
        }
        
        // If the request count is within the limit, proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If there's an error, pass it to the next middleware or error handler
        next(error);
    }
};

