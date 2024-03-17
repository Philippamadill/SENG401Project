import React from "react";
import "../assets/styling/ViewBook.css";
import { useState, useEffect, useContext } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";
import { useParams } from "react-router-dom";

const book = {
  ISBN: 12,
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  genre: "Fantasy",
  description:
    "The first book in the Harry Potter series, this book follows the young wizard Harry Potter as he discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  rating: "4.5",
};

export default function ViewBook(props) {
  // const[hover, setHover] = useState(null);
  const params = useParams();
  const [books, setBooks] = useState();
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);
  console.log(params.ISBN);
  async function getBook() {
    const route =
      "http://localhost:7003/book/getBookByISBN?ISBN=" + params.ISBN;
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
    console.log(jsonResponse);
  }
  function handleReview() {
    console.log(userInfo.username);
    if (userInfo.username === undefined) {
      navigate(`/`);
    } else {
      navigate(`/writeReview/` + books.ISBN);
    }
  }
  useEffect(() => {
    getBook();
  }, []);
  return (
    <div className="ViewBook">
      <div className="wrapper-view">
        <div className="book-cover">
          <img src={`/bookCovers/${book.ISBN}.jpg`} alt={book.title} />
        </div>
        <div className="book-info">
          {books != null && <h3 className="book-title">{books.book_name}</h3>}
          {books != null && (
            <h2 className="book-author">{books.author_name}</h2>
          )}
          {/*<h4 className="book-genre">Genre: {book.genre}</h4>*/}
          {books != null && (
            <h4 className="book-description">
              Description: {books.book_description}
            </h4>
          )}
          {/*<h4 className="book-rating">Rating: {book.rating}</h4>*/}
        </div>
        {/* if (loggedIn === true){ */}
        <div className="book-buttons">
          <button className="want">Add to "Want to Read"</button>
          <button className="current">Add to "Currently Reading"</button>
          <button className="read">Add to "Read"</button>
          <button
            className="leave-review"
            onClick={(e) => {
              handleReview();
            }}
          >
            Leave a review
          </button>
        </div>
        {/* } */}
      </div>
      <div className="book-reviews">
        <h6 className="stars">review rating</h6>
        <div className="review">
          <p className="review-text">review text</p>
        </div>
      </div>
    </div>
  );
}
