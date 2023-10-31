const { getData } = require('../src/controllers/apiController');

describe('API Controller', () => {
    // This test ensures that the API controller sends a success message when data is retrieved.
    it('should send a success message', () => {
        // Mock request and response objects
        const req = {};
        const res = { status: jest.fn(), json: jest.fn() };
        res.status.mockReturnValue(res);

        // Call the getData function from the API controller
        getData(req, res);

        // Assert that the response status is 200 and the message is as expected.
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'Data retrieved successfully' });
    });
});
