import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "../assets/styling/TopPick.css";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";
export default function WantToRead() {
const [books, setBooks] = useState([]);
const { userInfo, setUserInfo } = useContext(UserContext);
const navigate = useNavigate();
  
async function fetchBooks() {
  //route to the backend to fetch books that the user wants to read
    const route =
      "http://localhost:7003/bookshelf/getBooksFromWantToRead?username=" +
      userInfo.username;
    //await the response from the backend
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //await the json response containing the want to read info
    const resp = await response.json();
    setBooks(resp);
  }

  async function deleteBook(e, ISBN) {
    //route to the backend to delete a book from want to read
    const route =
      "http://localhost:7003/bookshelf/deleteBookFromWantToRead?ISBN=" +
      ISBN +
      "&username=" +
      userInfo.username;
    //await the response from the server
    await fetch(route, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //reload the window
    window.location.reload();
  }
  //call fetchBooks() on page load
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="top-bar">
        <h2 className="top-bar-title">Want To Read</h2>
        
      </div>
      <div className="books-container">
        {books.map((book) => (
          <div
            key={book.ISBN}
            className="review-card"
            onClick={(e) => {
              navigate("/viewBook/" + book.ISBN);
            }}
          >
            <img
              className="book-cover"
              src={book.cover_image}
              alt={book.book_name}
            />
            <div className="review-info">
              <div className="title">
                <h1>{book.book_name}</h1>
              </div>
              <div className="author">by {book.author_name}</div>
              <div className="review-review">{book.book_description}</div>
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
