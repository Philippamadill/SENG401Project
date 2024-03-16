// packages
const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");

// controllers
const userController = require("./controllers/user");
const reviewController = require("./controllers/review");
const bookController = require("./controllers/book");
const bookshelfController = require("./controllers/bookshelf");
const cors = require("cors");
// Run the server
const app = express();
const PORT = process.env.PORT || 7003;

// Middleware
app.use(express.json()); // This line adds JSON parsing middleware
app.use(cors());
// Routes
app.use("/user", userController);
app.use("/review", reviewController);
app.use("/book", bookController);
app.use("/bookshelf", bookshelfController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
