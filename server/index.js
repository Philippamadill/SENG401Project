const express = require('express');
const mysql = require('mysql');
const userRoutes = require('./routes/user');
const reviewRoutes = require('./routes/review');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // This line adds JSON parsing middleware

// Routes
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});