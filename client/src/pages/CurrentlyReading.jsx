import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "../assets/styling/TopPick.css";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";

export default function CurrentlyReading() {
  const [books, setBooks] = useState([]);

  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  //function to fetch books that are on the users currently reading bookshelf
  async function fetchBooks() {
    //route to the backend
    const route =
      "http://localhost:7003/bookshelf/getBooksFromCurrentlyReading?username=" +
      userInfo.username;
    console.log(route);
    //Await response from the server
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //await json response containing data
    const resp = await response.json();
    setBooks(resp);
  }

  //Function to delete books from the users currently reading bookshelf
  async function deleteBook(e, ISBN) {
    //route to the backend
    const route =
      "http://localhost:7003/bookshelf/deleteBookFromCurrentlyReading?ISBN=" +
      ISBN +
      "&username=" +
      userInfo.username;
      //await response from the backend
    await fetch(route, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //Redirect the user to the books viewbook page
    navigate(`/viewBook/` + ISBN);
  }

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      <div className="top-bar">
        <h2 className="top-bar-title">Currently Reading</h2>
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
