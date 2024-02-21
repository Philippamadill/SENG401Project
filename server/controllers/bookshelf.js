const express = require('express');
const router = express.Router();
const databaseConnection = require('../model/model');

// Route to add a book to CurrentlyReading
router.post('/addBookToCurrentlyReading', (req, res) => {
  const { ISBN, username } = req.body;

  // Check if ISBN and username are provided
  if (!ISBN || !username) {
    return res.status(400).send('ISBN and username are required');
  }

  // Insert the entry into the CurrentlyReading table
  databaseConnection.query('INSERT INTO CurrentlyReading (ISBN, username) VALUES (?, ?)', [ISBN, username], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error');
    }

    // Entry added to CurrentlyReading successfully
    res.status(201).send('Book added to CurrentlyReading successfully');
  });
});

// Route to delete a book from CurrentlyReading
router.delete('/deleteBookFromCurrentlyReading', (req, res) => {
    const { ISBN, username } = req.body;

  // Check if ISBN and username are provided
  if (!ISBN || !username) {
    return res.status(400).send('ISBN and username are required');
  }

  // Delete the entry from the CurrentlyReading table
  databaseConnection.query('DELETE FROM CurrentlyReading WHERE ISBN = ? AND username = ?', [ISBN, username], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error');
    }

    if (result.affectedRows === 0) {
      // If no rows were affected, it means the entry with the given ISBN and username doesn't exist
      return res.status(404).send('Book not found in CurrentlyReading');
    }

    // Book deleted from CurrentlyReading successfully
    res.status(200).send('Book deleted from CurrentlyReading successfully');
  });
});

// Route to add a book to WantToRead
router.post('/addBookToWantToRead', (req, res) => {
    const { ISBN, username } = req.body;
  
    // Check if ISBN and username are provided
    if (!ISBN || !username) {
      return res.status(400).send('ISBN and username are required');
    }
  
    // Insert the entry into the WantToRead table
    databaseConnection.query('INSERT INTO WantToRead (ISBN, username) VALUES (?, ?)', [ISBN, username], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Internal server error');
      }
  
      // Entry added to WantToRead successfully
      res.status(201).send('Book added to WantToRead successfully');
    });
  });
  
  // Route to delete a book from WantToRead
  router.delete('/deleteBookFromWantToRead', (req, res) => {
    const { ISBN, username } = req.body;

    // Check if ISBN and username are provided
    if (!ISBN || !username) {
        return res.status(400).send('ISBN and username are required');
      }
  
    // Delete the entry from the WantToRead table
    databaseConnection.query('DELETE FROM WantToRead WHERE ISBN = ? AND username = ?', [ISBN, username], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Internal server error');
      }
  
      if (result.affectedRows === 0) {
        // If no rows were affected, it means the entry with the given ISBN and username doesn't exist
        return res.status(404).send('Book not found in WantToRead');
      }
  
      // Book deleted from WantToRead successfully
      res.status(200).send('Book deleted from WantToRead successfully');
    });
  });
  
  // Route to add a book to AlreadyRead
  router.post('/addBookToAlreadyRead', (req, res) => {
    const { ISBN, username } = req.body;
  
    // Check if ISBN and username are provided
    if (!ISBN || !username) {
      return res.status(400).send('ISBN and username are required');
    }
  
    // Insert the entry into the AlreadyRead table
    databaseConnection.query('INSERT INTO AlreadyRead (ISBN, username) VALUES (?, ?)', [ISBN, username], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Internal server error');
      }
  
      // Entry added to AlreadyRead successfully
      res.status(201).send('Book added to AlreadyRead successfully');
    });
  });
  
  // Route to delete a book from AlreadyRead
  router.delete('/deleteBookFromAlreadyRead', (req, res) => {
    const { ISBN, username } = req.body;

    // Check if ISBN and username are provided
    if (!ISBN || !username) {
        return res.status(400).send('ISBN and username are required');
      }
  
    // Delete the entry from the AlreadyRead table
    databaseConnection.query('DELETE FROM AlreadyRead WHERE ISBN = ? AND username = ?', [ISBN, username], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Internal server error');
      }
  
      if (result.affectedRows === 0) {
        // If no rows were affected, it means the entry with the given ISBN and username doesn't exist
        return res.status(404).send('Book not found in AlreadyRead');
      }
  
      // Book deleted from AlreadyRead successfully
      res.status(200).send('Book deleted from AlreadyRead successfully');
    });
  });  

module.exports = router;
