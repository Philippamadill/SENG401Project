import React, { useState, useEffect } from 'react';
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import '../assets/styling/Reviews.css';

import { UserContext , AuthenticationContext} from '../context/UserContext';
import { useContext } from 'react';
const dummyBooks = [
    {
        ISBN: '1234567890123',
        title: 'Book Title 1',
        author: 'Author 1'
    },
    {
        ISBN: '2345678901234',
        title: 'Book Title 2',
        author: 'Author 2'
    },
    {
        ISBN: '1',
        title: 'Book Title 3',
        author: 'Author 3'
    },
    {
        ISBN: '1234567890123',
        title: 'Book Title 1',
        author: 'Author 1'
    },
    {
        ISBN: '2345678901234',
        title: 'Book Title 2',
        author: 'Author 2'
    },
    {
        ISBN: '1',
        title: 'Book Title 3',
        author: 'Author2 3'
    },
    {
        ISBN: '1234567890123',
        title: 'Book Title 1',
        author: 'Author 1'
    },
    {
        ISBN: '2345678901234',
        title: 'Book Title 2',
        author: 'Author 2'
    },
    {
        ISBN: '1',
        title: 'Book Title 3',
        author: 'Author 3'
    },
    // Add more dummy book objects as needed
];

export default function Reviews() {
    const {userInfo} = useContext(UserContext);
    const {setAuthentication} = useContext(AuthenticationContext);

    const [reviews, setReviews] = useState([]);
    const [books, setBooks] = useState([]);

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
            console.log(userInfo.username)
            const response = await fetch("http://localhost:7003/review/getReviewsByUsername?username="+userInfo.username, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    "Content-Type": "application/json"
                }
            });
            
            if (response.ok) {
                const responseData = await response.json();
                setReviews(responseData);
                console.log(responseData);
                GetBooks();

            } else {
                console.log("Error Fetching Reviews");
            }
        } catch (error) {
            console.error("Error Fetching Reviews:", error);
        }
    }

    async function GetBooks() {
        console.log(reviews);
        
        for (const review of reviews) {
            console.log(review.ISBN);
            try {
                const response = await fetch("http://localhost:7003/book/getBookByISBN?ISBN=" + review.ISBN, {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET",
                        "Content-Type": "application/json"
                    }
                });
    
                if (response.ok) {
                    const responseData = await response.json();
                    console.log("res data");

                    console.log(responseData);
                    setBooks(old => [...old, responseData]);
                    console.log(books);
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
                <button className="add-book">ADD NEW REVIEW </button>
            </div>
            <div className="books-container">
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
