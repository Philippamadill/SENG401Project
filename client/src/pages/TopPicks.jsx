import React, { useState, useEffect } from "react";
//import Math from 'math';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "../assets/styling/TopPick.css";
import { useNavigate, Link } from "react-router-dom";

// const dummyBooks = [
//   {
//     ISBN: "1234567890123",
//     title: "Book Title 1",
//     author: "Author 1",
//   },
//   {
//     ISBN: "2345678901234",
//     title: "Book Title 2",
//     author: "Author 2",
//   },
//   {
//     ISBN: "1",
//     title: "Book Title 3",
//     author: "Author 3",
//   },
//   {
//     ISBN: "1234567890123",
//     title: "Book Title 1",
//     author: "Author 1",
//   },
//   {
//     ISBN: "2345678901234",
//     title: "Book Title 2",
//     author: "Author 2",
//   },
//   {
//     ISBN: "1",
//     title: "Book Title 3",
//     author: "Author2 3",
//   },
//   {
//     ISBN: "1234567890123",
//     title: "Book Title 1",
//     author: "Author 1",
//   },
//   {
//     ISBN: "2345678901234",
//     title: "Book Title 2",
//     author: "Author 2",
//   },
//   {
//     ISBN: "1",
//     title: "Book Title 3",
//     author: "Author 3",
//   },
//   // Add more dummy book objects as needed
// ];

var numArray = [];
var randomNumber = 0;
var count = 0;
export default function TopPicks() {
  const [books, setBooks] = useState([]);
  const [randBook, setRandBook] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get('http://localhost:7003/getAllBooks'); // Assuming your API endpoint is '/api/books'
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    fetchBooks();
  }, []);

  async function getrandISBN(){
    try {
      const response = await axios.get('http://localhost:7003/getAllBooks'); 
      count = response.data.count;
    } catch (error) {
      console.error("Error fetching count:", error);
    }
    
    while(numArray.length <= 5){
    randomNumber = Math.floor(Math.random() * count) + 1; 
    if (!(numArray.includes(randomNumber))){
      numArray.push(randomNumber);
    }
  }
  return randomNumber;
  }

  async function getBook() {
    const rand = getrandISBN();
    const route = "http://localhost:7003/book/getAllBooks";
    console.log(route);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
  });
    console.log(response);
    const jsonResponse = await response.json();
    setBooks(jsonResponse);
    var randBooks;
    randBooks.push(books[rand[0]]);
    randBooks.push(books[rand[1]]);
    randBooks.push(books[rand[2]]);
    randBooks.push(books[rand[3]]);
    randBooks.push(books[rand[4]]);
    console.log(jsonResponse);
    setRandBook(randBooks);
  }


  return (
    <div>
      <div className="top-bar">
        <h2 className="top-bar-title">Top Picks</h2>
      </div>
      <div className="books-container">
        {randBook.map((book) => (
          <div key={book.ISBN} className="book-card">
            <img
              className="book-cover"
              src={`/bookCovers/${book.ISBN}.jpg`}
              alt={book.title}
            />
            <div className="book-info">
              <div className="title">
                <h1>{book.title}</h1>
              </div>
              <div className="author">{book.author}</div>
              <button
            className="view"
            onClick={(e) => {
              <Link to="/viewbook/${book.ISBN}">view book</Link>
            }}
          >
            View book details
          </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
