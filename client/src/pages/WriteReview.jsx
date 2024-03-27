import React, { useContext, useEffect, useState } from "react";
import { MdNoAccounts } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../assets/styling/WriteReview.css";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";

export default function WriteReview() {
  const navigate = useNavigate();
  const params = useParams();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);
  const [failText, setFailText] = useState("");
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );

  const book = {
    ISBN: params.ISBN,
    title: params.title,
    author: params.author,
  };
  const [books, setBooks] = useState();
  

  async function getBook() {
    //route to the server to get the book information
    const route =
      "http://localhost:7003/book/getBookByISBN?ISBN=" + params.ISBN;
    //await the response from the server
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //await the json response containing the book data
    const jsonResponse = await response.json();
    //set the book to the book from the database
    setBooks(jsonResponse);
  }
  //call get book on page load
  useEffect(() => {
    getBook();
  }, []);

  const username = userInfo.username;

  //set a state for the form data
  const [formData, setFormData] = useState({
    isbn: book.ISBN,
    username: username,
    rating: 0,
    feedback: "",
  });
  //on a rating change keep the previous info but change the rating
  const handleRatingChange = (rating) => {
    setRating(rating);
    setFormData((prevData) => ({
      ...prevData,
      rating: rating,
    }));
  };
  //on an input change keep the previous info but change the value for that input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //run on form submission
  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      ISBN: formData.isbn,
      username: formData.username,
      stars: formData.rating,
      description: formData.feedback,
    };

    //route to the server to create a review
    const route = "http://localhost:7003/review/createReview";
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (
      response.status === 400 ||
      response.status === 500 ||
      response.status === 500 ||
      response.status === 500
    ) {
      //if theres an error, display the error message
      setFailText(response.statusText);
    } else if (response.status === 201) {
      //if the review is successful navigate to the books viewBook page
      navigate("/viewBook/" + book.ISBN);
    }
  }
  

  return (
    <div className="big-container">
      {/* <MyComponent isbn={book.ISBN} /> */}
      {/* <div>{bookData.author_name}</div> */}

      <h1 className="heading">Add Review: New Review</h1>
      <br></br>

      <div className="container">
        <div className="panelLeft">
          <div>
            <h5 className="styled-heading">Book Selected: </h5>
          </div>

          <div className="books-container">
            <div className="book-card">
            {books != null &&<img src={books.cover_image} alt={books.book_name} />}
              {/* <img
                className="book-cover"
                src={books.cover_image}
                alt={book.title}
              /> */}

              <div className="book-info">
                <div className="title">
                  <h1>{book.title}</h1>
                </div>
                <div className="author">{book.author}</div>
              </div>
            </div>
          </div>
          {/* <div><h5>{bookCover}</h5></div> */}
        </div>
        <div className="panelRight">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="name-container-wrapper">
                <h5 className="styled-heading">
                  Reviewer Name:
                  <br></br>
                </h5>

                <div className="styled-username">{username}</div>
              </div>

              <div className="star-container-wrapper">
                <label className="styled-heading">
                  Rating:
                  <span className="required"> *</span>
                </label>
                <div className="rating-container">
                  {[...Array(totalStars)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onChange={() => handleRatingChange(currentRating)}
                        />
                        <span
                          className="star"
                          style={{
                            color:
                              currentRating <= (hover || rating)
                                ? "#ffc107"
                                : "#e4e5e9",
                          }}
                          onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(null)}
                        >
                          &#9733;
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="feedback-wrapper">
                <label className="styled-heading">
                  Review:
                  <span className="required"> *</span>
                  <br></br>
                  <textarea
                    className="textarea-style"
                    placeholder="Enter your review here..."
                    required
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div id="submitButton">
                <button className="submit" name="submitButton" type="submit">
                  ADD REVIEW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
