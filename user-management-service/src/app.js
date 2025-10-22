require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');
const landingRoutes = require('./routes/landingRoutes');

// Initialize the Express application
const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the landing page route
app.use('/', landingRoutes);

// Define user routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));