// packages
const mysql = require('mysql2');
const fs = require('fs');

// envrionmentVariables
require('dotenv').config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const sqlFilePath = './model/database_setup.sql';

console.log(dbHost)
console.log(dbUser)
console.log(dbPassword)

//database setup
var databaseConnection = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword
  });

// Attempt to connect to the database and create tables and data
databaseConnection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to the database');
  
    // Read SQL file
    fs.readFile(sqlFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading SQL file:', err);
        return;
      }
  
      // Split SQL file into individual queries
      const queries = data.split(';').filter(query => query.trim() !== '');
  
      // Execute each query
      queries.forEach(query => {
        databaseConnection.query(query, (err, results) => {
          if (err) {
            console.error('Error executing query:', err);
            return;
          }
          console.log('Query executed successfully');
        });
      });
    });
  });

module.exports = databaseConnection;