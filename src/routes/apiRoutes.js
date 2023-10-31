// Import necessary modules
const express = require('express');
// Create a new router instance
const router = express.Router();
// Import the rate limiter controller
const rateLimiterController = require('../controllers/rateLimiterController');
// Import the API controller
const apiController = require('../controllers/apiController');

// Define a route to fetch data. Before fetching the data, the rate limiter middleware is applied.
// This ensures that the API request rate is limited as per the defined rules.
router.get('/data', rateLimiterController.rateLimiter, apiController.getData);

// Export the router to be used in other parts of the application
module.exports = router;

