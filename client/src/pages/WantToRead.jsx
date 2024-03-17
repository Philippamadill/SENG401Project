import React, { useState, useEffect, useContext } from "react";
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "../assets/styling/TopPick.css";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";
export default function TopPicks() {
  const [books, setBooks] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  async function fetchBooks() {
    const route =
      "http://localhost:7003/bookshelf/getBooksFromWantToRead?username=" +
      userInfo.username;
    console.log(route);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resp = await response.json();
    setBooks(resp);
    console.log(resp);
    console.log(books.length);
  }
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="top-bar">
        <h2 className="top-bar-title">Want To Read</h2>
        <button className="add-book">ADD NEW BOOK </button>
      </div>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.ISBN} className="book-card">
            <img
              className="book-cover"
              src={`/bookCovers/${book.ISBN}.jpg`}
              alt={book.book_name}
            />
            <div className="book-info">
              <div className="title">
                <h1>{book.book_name}</h1>
              </div>
              <div className="author">{book.author_name}</div>
              <button className="remove-book">Remove Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
