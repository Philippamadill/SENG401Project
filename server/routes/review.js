const express = require('express');
const router = express.Router();

// Route to create a review
router.post('/createReview', (req, res) => {
  // Implement your user creation logic here
  res.send('User account created successfully');
});

module.exports = router;
