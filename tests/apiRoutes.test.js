// apiRoutes.test.js

const request = require('supertest');
// Import your app
const app = require('../src/app');

// Mock the Redis client
jest.mock('../src/utils/redisClient', () => ({
  incr: jest.fn(() => Promise.resolve(1)),
  expire: jest.fn(() => Promise.resolve(1)),
}));
  
afterEach(() => {
  jest.resetAllMocks();
});

// This test suite focuses on the API routes.
describe('API Routes', () => {
    // This test ensures that the API route returns data successfully.
    it('should get data successfully', async () => {
        const res = await request(app).get('/api/data');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Data retrieved successfully');
    });

    // This test ensures that the API route returns a 429 status code when the request limit is exceeded.
    it('should return 429 Too Many Requests when limit is exceeded', async () => {
        // Mock the Redis client to simulate exceeding the request limit.
        require('../src/utils/redisClient').incr.mockResolvedValue(101);

        const res = await request(app).get('/api/data');
        expect(res.statusCode).toEqual(429);
        expect(res.body).toHaveProperty('message', 'Too Many Requests');
    });
});
