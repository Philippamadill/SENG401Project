import React from "react";
import "../assets/styling/WriteReview.css";
import { useState, useEffect, useContext } from "react";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//component works to get the book data - but need to figure out how to make it accessible in the write review function

// const MyComponent = ({ isbn }) => {
//     const [bookData, setBookData] = useState(null);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const route = `http://localhost:7003/book/getBookByISBN?ISBN=${isbn}`;
//           const response = await fetch(route, {
//             method: 'GET',
//             headers: {
//               'Access-Control-Allow-Origin': '*',
//               'Access-Control-Allow-Methods': 'GET',
//               'Content-Type': 'application/json',
//             },
//           });

//           if (!response.ok) {
//             throw new Error('Failed to fetch book data');
//           }

//           const data = await response.json();
//           setBookData(data);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       fetchData();
//     }, [isbn]);

//     useEffect(() => {
//       console.log('BOOKDATA', bookData);
//     }, [bookData]);

//     return null;
//   };

//hardcoded a book for now
const book = {
  ISBN: "12",
  title: "Harry Potter and the Philosophers Stone",
  author: "J.K. Rowling",
};

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
  console.log(userInfo);

  //works - fetches username from context
  const username = userInfo.username;
  console.log(params.ISBN);
  //ALSO NEED TO FETCH SELECTED BOOK ISBN - to get cover and to send to db - work in progress

  const [formData, setFormData] = useState({
    isbn: book.ISBN,
    username: username,
    rating: 0,
    feedback: "",
  });

  const handleRatingChange = (rating) => {
    setRating(rating);
    setFormData((prevData) => ({
      ...prevData,
      rating: rating,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // You can handle form submission logic here
    const body = {
      ISBN: formData.isbn,
      username: formData.username,
      stars: formData.rating,
      description: formData.feedback,
    };

    //works - sends data to the db - works as long as the book and username already exists in the db - (foreign keys)
    const route = "http://localhost:7003/review/createReview";
    console.log(route);
    console.log(JSON.stringify(body));
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
    if (
      response.status === 400 ||
      response.status === 500 ||
      response.status === 500 ||
      response.status === 500
    ) {
      //need to figure out what to do in terms of error handling
      setFailText(response.statusText);
    } else if (response.status == 201) {
      //successfull case
      //add navigation to a different page - probably back to philipas page
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
              <img
                className="book-cover"
                src={`/bookCovers/${book.ISBN}.jpg`}
                alt={book.title}
              />

              {/* <div className="book-info">
                            <div className="title"><h1>{book.title}</h1></div>
                            <div className="author">{book.author}</div>
                        </div> */}
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
