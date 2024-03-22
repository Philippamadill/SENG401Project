const express = require("express");
const Multer = require("multer");
const format = require("format");
const router = express.Router();
const databaseConnection = require("../model/model");
const { Storage } = require('@google-cloud/storage')

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 25 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

// Initialize storage
const storage = new Storage({
  keyFilename: `./serviceAccountKey.json`,
})

const bucketName = 'bookbook'
const bucket = storage.bucket(bucketName)

// 0. Upload a image file to GCP
router.post('/uploadToGCP', multer.single("imgFile"), (req, res) => {
  try {
    if(req.file){
      const blob= bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream();

      blobStream.on('finish', () => {
        const publicURL = `https://storage.googleapis.com/bookbook/${req.file.originalname}`
        res.json({message: "Succesfuly uploaded image", pubURL: publicURL});
      })

      blobStream.end(req.file.buffer);
    }
  } catch (error) {
    res.status(400).send("NOT OK");
  }

})

// 1. Create a Book
router.post("/createBook", (req, res) => {
  const {
    ISBN,
    book_name,
    book_description,
    cover_image,
    author_name,
    about_author,
  } = req.body;

  // Check if all required fields are present
  if (!ISBN || !book_name || !author_name) {
    return res
      .status(400)
      .send("ISBN, book_name, and author_name are required fields");
  }


  // Insert the new book into the database
  databaseConnection.query(
    "INSERT INTO Book (ISBN, book_name, book_description, cover_image, author_name, about_author) VALUES (?, ?, ?, ?, ?, ?)",
    [ISBN, book_name, book_description, cover_image, author_name, about_author],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).send("Internal server error");
      }

      // Book created successfully
      res.status(201).send("Book created successfully");
    }
  );
});

// 2. Delete a Book
router.delete("/deleteBook", (req, res) => {
  const { ISBN } = req.query;

  // Check if ISBN is provided
  if (!ISBN || !username) {
    return res.status(400).send("ISBN is required");
  }

  // Query the database to delete the book with the specified ISBN
  databaseConnection.query(
    "DELETE FROM Book WHERE ISBN = ?",
    [ISBN],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).send("Internal server error");
      }

      if (result.affectedRows === 0) {
        // If no rows were affected, it means the book with the given ISBN doesn't exist
        return res.status(404).send("Book not found");
      }

      // Book deleted successfully
      res.status(200).send("Book deleted successfully");
    }
  );
});

// 3. Get all Books
router.get("/getAllBooks", (req, res) => {
  // Query the database to get all books
  databaseConnection.query("SELECT * FROM Book", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Internal server error");
    }

    // Send the books as JSON response
    res.json(results);
  });
});

// 4. Get a Book by ISBN
router.get("/getBookByISBN", (req, res) => {
  const { ISBN } = req.query;

  // Check if ISBN is provided
  if (!ISBN) {
    return res.status(400).send("ISBN is required");
  }

  // Query the database to get the book with the specified ISBN
  databaseConnection.query(
    "SELECT * FROM Book WHERE ISBN = ?",
    [ISBN],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).send("Internal server error");
      }

      if (result.length === 0) {
        // If no book is found with the given ISBN, return 404
        return res.status(404).send("Book not found");
      }

      // Send the book as JSON response
      res.json(result[0]);
    }
  );
});

module.exports = router;
