// packages
const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');

// controllers
const userController = require('./controllers/user');
const reviewController = require('./controllers/review');

// Run the server
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // This line adds JSON parsing middleware

// Routes
app.use('/user', userController);
app.use('/review', reviewController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});