import React, { useEffect, useState } from 'react';
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import '../assets/styling/Reviews.css';

import { useContext } from 'react';
import { AuthenticationContext, UserContext } from '../context/UserContext';

export default function Reviews() {
    const {userInfo} = useContext(UserContext);
    const {setAuthentication} = useContext(AuthenticationContext);

    const [reviews, setReviews] = useState([]);
    const [books, setBooks] = useState([]);
    //call to GetReviews function on page load
    useEffect(() => {
        GetReviews();
    }, []);

    useEffect(() => {
        if (reviews.length > 0) {
            GetBooks();
        }
    }, [reviews]); // Run GetBooks whenever reviews change

    async function GetReviews() {
        try {
            //await response from the server
            const response = await fetch("http://localhost:7003/review/getReviewsByUsername?username="+userInfo.username, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    "Content-Type": "application/json"
                }
            });
            
            if (response.ok) {
                //await json response containing data
                const responseData = await response.json();
                //Set the reviews variable array to the response from the database
                setReviews(responseData);
                //call the GetBooks method
                GetBooks();

            } else {
                console.log("Error Fetching Reviews");
            }
        } catch (error) {
            console.error("Error Fetching Reviews:", error);
        }
    }

    async function GetBooks() {
        //for each review get info about the book that was reviewed
        for (const review of reviews) {
            console.log(review.ISBN);
            try {
                //await response from the database about the book that
                const response = await fetch("http://localhost:7003/book/getBookByISBN?ISBN=" + review.ISBN, {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET",
                        "Content-Type": "application/json"
                    }
                });
    
                if (response.ok) {
                    //await the json response containing data about the book
                    const responseData = await response.json();
                    //add the book info to an array
                    setBooks(old => [...old, responseData]);
                } else {
                    console.log("Error Fetching Books");
                }
            } catch (error) {
                console.error("Error Fetching Books:", error);
            }
        }
    }
    
    return (
        <div>
            <div className='top-bar'>
                <h2 className='top-bar-title'>Reviews</h2>
            </div>
            <div className="books-container-review">
                {books.map(book => (
                    <div key={book.ISBN} className="review-card">
                        <img
                        className="book-cover"
                        src={`/bookCovers/${book.ISBN}.jpg`}
                        alt={book.book_name}
                        />
                        <div className="review-info">
                            <div className="title"><h1>{book.book_name}</h1></div>
                            <div className="author">{book.author_name}</div>
                            <div className="review-review">
                                {/* Check if a review exists for the current book */}
                                {reviews.find(review => review.ISBN === book.ISBN) ? (
                                    // Display the review if found
                                    <p>{reviews.find(review => review.ISBN === book.ISBN).description}</p>
                                ) : (
                                    // Display a message if no review is found
                                    <p>No review available</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}
