const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use('/api', apiRoutes);

// Global error handler
app.use(errorHandler);

module.exports = app;

