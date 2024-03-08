import React from 'react';
import '../assets/styling/WriteReview.css';
import { useState, useEffect } from 'react';


const book =
    {
        ISBN: '12',
        title: 'Harry Potter and the Philosophers Stone',
        author: 'J.K. Rowling'
    }

export default function WriteReview(){

    const[rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);
    const[totalStars, setTotalStars]=useState(5);

    //need to fetch the username of the logged in user - idk how to do that - could maybe pass as argument?
    const username = 'username'

    //ALSO NEED TO FETCH SELECTED BOOK ISBN - to get cover and to send to db

    const [formData, setFormData] = useState({
        isbn: book.ISBN,
        username: username,
        rating: 0,
        feedback: '',
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


    const handleSubmit = (e) =>{
        e.preventDefault();
        // You can handle form submission logic here
        console.log("FORM SUBMITTED");
        console.log(formData);
        //formdata holds the data from the user - can now update/send to database  
    };

    return(
        <div className ='big-container'>
            <h1 className="heading">Add Review: New Review</h1>
            <br></br>
        
        <div className="container">
            <div className="panelLeft">
                <div>
                <h5 className="styled-heading">Book Selected: </h5>
                </div>

                <div className="books-container">
                    <div className="book-card">
                        <img className = "book-cover"src={`/bookCovers/${book.ISBN}.jpg`} alt={book.title} />
                        {/* <div className="book-info">
                            <div className="title"><h1>{book.title}</h1></div>
                            <div className="author">{book.author}</div>
                        </div> */}
                    </div>
                </div>

                
            
            
            
        
            
            </div>
            <div className="panelRight">
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='name-container-wrapper'>
                            <h5 className='styled-heading'>
                                Reviewer Name:
                                <br></br>
                            </h5>

                            {/* /* USER NAME - need to link it to the logged in user */}
                            <div className ="styled-username">{username}</div>
                            
                            
                        </div>

                        <div className='star-container-wrapper'>
                        <label className='styled-heading'>
                        Rating: 
                        <span className="required"> *</span>
                            </label>
                            <div className="rating-container">
                                {[...Array(totalStars)].map((star, index) => {
                                    const currentRating = index + 1;
                                    return(
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={currentRating}
                                                onChange={() => (
                                                    handleRatingChange(currentRating)
                                                    )}
                                            />
                                            <span
                                                className="star"
                                                style={{
                                                color:
                                                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
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


                        <div className ='feedback-wrapper'>
                            <label className='styled-heading'>
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

                {/* REMOVE THIS BUTTON AFTER - JUST HAVE IT RN TO CHECK WHATS IN THE FORM ON THE CONSOLE
                */}
                <button onClick={() => console.log(formData)}>Log Form Data</button>

                

            </div>
        </div>
    </div>
    )
}