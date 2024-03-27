import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "../assets/styling/TopPick.css";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";

export default function AlreadyRead() {
  const [books, setBooks] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  //Function to retrieve books that are on the users already read shelf
  async function fetchBooks() {
    //route to the backend
    const route =
      "http://localhost:7003/bookshelf/getBooksFromAlreadyRead?username=" +
      userInfo.username;
    //await the response from the backend
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //await the json response containing the data
    const resp = await response.json();
    setBooks(resp);
  }

  //Function to delete books that are on the users already read shelf
  async function deleteBook(e, ISBN) {
    //route to the backend
    const route =
      "http://localhost:7003/bookshelf/deleteBookFromAlreadyRead?ISBN=" +
      ISBN +
      "&username=" +
      userInfo.username;
    //Await the response from the backend
    await fetch(route, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //Redirect the user to the deleted books view book page
    navigate(`/viewBook/` + ISBN);
  }
  //Call fetchBooks once on page load
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="top-bar">
        <h2 className="top-bar-title">Already Read</h2>
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
              <div className="author">{book.author_name}</div>
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
