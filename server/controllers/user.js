const express = require('express');
const router = express.Router();
const databaseConnection = require('../database/database');

// GET /user/getAccount?username=myusername&password=mypassword
router.get('/getAccount', (req, res) => {
  const { username, password } = req.query;

  // Check if both username and password are present
  if (!username || !password) {
    return res.status(400).send('Both username and password are required');
  }

  // Check credentials against the database
  databaseConnection.query('SELECT * FROM User WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error');
    }
    
    // Check if user with provided username and password exists
    if (results.length === 0) {
      return res.status(401).send('Unauthorized');
    }
    
    // If user exists and credentials are correct, you can send some data back
    res.json({ message: 'User authenticated successfully', user: results[0] });
  });
});

// POST /user/createAccount
router.post('/createAccount', (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  // Check if all required fields are present
  if (!username || !firstName || !lastName || !email || !password) {
    return res.status(400).send('All fields are required');
  }

  // Check if the username already exists
  databaseConnection.query('SELECT * FROM User WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error');
    }

    // If username already exists, return error
    if (results.length > 0) {
      return res.status(400).send('Username already exists');
    }

    // Insert the new user into the database
    databaseConnection.query('INSERT INTO User (username, first_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)', [username, firstName, lastName, email, password], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Internal server error');
      }

      // User account created successfully
      res.status(201).send('User account created successfully');
    });
  });
});

module.exports = router;
