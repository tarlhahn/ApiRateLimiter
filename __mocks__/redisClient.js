const redisClient = {
    incr: jest.fn(),
    expire: jest.fn(),
    // Add other methods as per your use case
};

module.exports = redisClient;

