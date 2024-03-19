import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "../assets/styling/TopPick.css";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";

export default function TopPicks() {
  const [books, setBooks] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  async function fetchBooks() {
    const route =
      "http://localhost:7003/bookshelf/getBooksFromAlreadyRead?username=" +
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
  }

  async function deleteBook(e, ISBN) {
    const route =
      "http://localhost:7003/bookshelf/deleteBookFromAlreadyRead?ISBN=" +
      ISBN +
      "&username=" +
      userInfo.username;
    console.log(route);
    await fetch(route, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate(`/viewBook/` + ISBN);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="top-bar">
        <h2 className="top-bar-title">Already Read</h2>
        <button className="add-book">ADD NEW BOOK </button>
      </div>
      <div className="books-container">
        {books.map((book) => (
          <div
            key={book.ISBN}
            className="book-card"
            onClick={(e) => {
              navigate("/viewBook/" + book.ISBN);
            }}
          >
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
              <button
                className="remove-book"
                onClick={(e) => {
                  deleteBook(e, book.ISBN);
                }}
              >
                Remove Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
