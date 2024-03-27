import React, { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../assets/styling/ViewBook.css";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";
export default function ViewBook(props) {
  const params = useParams();
  const [books, setBooks] = useState();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);

  async function getBook() {
    //route to the server to get book by ISBN
    const route =
      "http://localhost:7003/book/getBookByISBN?ISBN=" + params.ISBN;
    //await the response from the server
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //await the json response from the server that contains the book information
    const jsonResponse = await response.json();
    setBooks(jsonResponse);
  }

  async function getReviews() {
    //route to the server to get the review information for the book
    const route =
      "http://localhost:7003/review/getReviewsByISBN?ISBN=" + params.ISBN;
    //await the response from the server
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //await the json response from the server that contains the review information
    const jsonResponse = await response.json();
    //set the array of reviews to the json response
    setReviews(jsonResponse);
  }

  function handleReview() {
    //if the user is not logged in redirect them to the login page
    if (userInfo.username === undefined) {
      navigate(`/login`);
    } 
    //if the user is logged in, navigate them to the leave a review page for that book
    else {
      navigate(
        `/writeReview/` +
          books.ISBN +
          "/" +
          books.book_name +
          "/" +
          books.author_name
      );
    }
  }
  async function handleAdd(selector) {
    //If the user is not logged in redirect them to the login page
    if (userInfo.username === undefined) {
      navigate(`/login`);
    } 
    //if the user is logged in, add the book to the specified shelf and redirect them to that shelf
    else {
      //create the body to send to the server
      const body = {
        ISBN: books.ISBN,
        username: userInfo.username,
      };
      //route to the server to add a book to a shelf
      const route = "http://localhost:7003/bookshelf/addBookTo" + selector;
      //await the response from the server
      const response = await fetch(route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      //navigate to the specified shelf
      navigate(`/` + selector);
    }
  }
  //call these functions on page load
  useEffect(() => {
    getBook();
    getReviews();
  }, []);
  return (
    <div className="ViewBook">
      <div className="wrapper-view">
        <div className="book-cover_">
        {books != null &&<img src={books.cover_image} alt={books.book_name} id="book_cover_photo"/>}
        </div>
        <div className="book-info_">
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
          <button
            className="want"
            onClick={(e) => {
              handleAdd("WantToRead");
            }}
          >
            Add to "Want to Read"
          </button>
          <button
            className="current"
            onClick={(e) => {
              handleAdd("CurrentlyReading");
            }}
          >
            Add to "Currently Reading"
          </button>
          <button
            className="read"
            onClick={(e) => {
              handleAdd("AlreadyRead");
            }}
          >
            Add to "Read"
          </button>
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
        <h4 className="stars">Reviews</h4>
        {reviews.map((review) => (
          <div className="review-container">
            <div className="review-Stars">Rating: {review.stars} / 5</div>
            <div className="review-Username">Posted by: {review.username}</div>
            <div className="review-Desc">{review.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
