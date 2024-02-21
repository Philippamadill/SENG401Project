DROP DATABASE IF EXISTS SENG401;
CREATE DATABASE SENG401;
USE SENG401;

-- Create User table
CREATE TABLE User (
    username VARCHAR(50) PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100)
);

-- Create Book table
CREATE TABLE Book (
    ISBN VARCHAR(13) PRIMARY KEY,
    book_name VARCHAR(100),
    book_description TEXT,
    cover_image LONGBLOB,
    author_name VARCHAR(100),
    about_author TEXT
);

-- Create Review table
CREATE TABLE Review (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(13),
    username VARCHAR(50),
    stars INT,
    description TEXT,
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
    FOREIGN KEY (username) REFERENCES User(username)
);

-- Create CurrentlyReading table
CREATE TABLE CurrentlyReading (
    ISBN VARCHAR(13),
    username VARCHAR(50),
    PRIMARY KEY (ISBN, username),
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
    FOREIGN KEY (username) REFERENCES User(username)
);

-- Create WantToRead table
CREATE TABLE WantToRead (
    ISBN VARCHAR(13),
    username VARCHAR(50),
    PRIMARY KEY (ISBN, username),
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
    FOREIGN KEY (username) REFERENCES User(username)
);

-- Create AlreadyRead table
CREATE TABLE AlreadyRead (
    ISBN VARCHAR(13),
    username VARCHAR(50),
    PRIMARY KEY (ISBN, username),
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
    FOREIGN KEY (username) REFERENCES User(username)
);

-- Insert dummy data into User table
INSERT INTO User (username, first_name, last_name, email, password)
VALUES 
('user1', 'John', 'Doe', 'john.doe@example.com', 'password123'),
('user2', 'Jane', 'Smith', 'jane.smith@example.com', 'securepass'),
('user3', 'Alice', 'Johnson', 'alice.johnson@example.com', 'abc123');