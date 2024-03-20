import React, { useState, useEffect } from "react";
//import Math from 'math';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "../assets/styling/TopPick.css";
import { useNavigate, Link } from "react-router-dom";

var rand = [];
export default function TopPicks() {
  const [books, setBooks] = useState([]);
  const [randBook, setRandBook] = useState([]);
  getBook();


  /*async function getrandISBN(){
    try {
      const response = "http://localhost:7003/book/getAllBooks"; 
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
  }*/

  async function getBook() {
    const route = "http://localhost:7003/book/getAllBooks";
    console.log(route.data);
    let count = route.data.count;
    while(rand.length <= 5){
      let randomNumber = Math.floor(Math.random() * count) + 1; 
      if (!(rand.includes(randomNumber))){
        rand.push(randomNumber);
      }
    }
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
