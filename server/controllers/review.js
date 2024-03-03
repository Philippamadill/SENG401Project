const express = require('express');
const router = express.Router();
const databaseConnection = require('../model/model');

// 1. Get reviews given the ISBN of a book
router.get('/getReviewsByISBN', (req, res) => {
  const { ISBN } = req.query;

    // Check if ISBN is provided
    if (!ISBN) {
        return res.status(400).send('ISBN is required');
      }

  // Query the database for reviews of the given book ISBN
  databaseConnection.query('SELECT * FROM Review WHERE ISBN = ?', [ISBN], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error');
    }

    // Send the reviews as JSON response
    res.json(results);
  });
});

// 2. Get reviews given the username of the user
router.get('/getReviewsByUsername', (req, res) => {
  const { username } = req.query;

    // Check if username is provided
    if (!username) {
        return res.status(400).send('Username is required');
      }

  // Query the database for reviews by the given username
  databaseConnection.query('SELECT * FROM Review WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error');
    }

    // Send the reviews as JSON response
    res.json(results);
  });
});

// 3. Create a review
router.post('/createReview', (req, res) => {
  const { ISBN, username, stars, description } = req.body;

  // Check if all required fields are present
  if (!ISBN || !username || !stars || !description) {
    return res.status(400).send('All fields are required');
  }

  // Insert the new review into the database
  databaseConnection.query('INSERT INTO Review (ISBN, username, stars, description) VALUES (?, ?, ?, ?)', [ISBN, username, stars, description], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error');
    }

    // Review created successfully
    res.status(201).send('Review created successfully');
  });
});

// 4. Delete a review
router.delete('/deleteReview', (req, res) => {
  const { review_id } = req.query;

    // Check if ISBN is provided
    if (!review_id) {
        return res.status(400).send('Review Id is required');
      }

  // Query the database to delete the review with the specified review_id
  databaseConnection.query('DELETE FROM Review WHERE review_id = ?', [review_id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error');
    }

    if (result.affectedRows === 0) {
      // If no rows were affected, it means the review with the given review_id doesn't exist
      return res.status(404).send('Review not found');
    }

    // Review deleted successfully
    res.status(200).send('Review deleted successfully');
  });
});

module.exports = router;
