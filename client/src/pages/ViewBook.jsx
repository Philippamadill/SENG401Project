import React from 'react'
import '../assets/styling/ViewBook.css';
import { useState } from 'react';
import { FaUser} from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const book = {
    ISBN: 12,
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    description: 'The first book in the Harry Potter series, this book follows the young wizard Harry Potter as he discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.',
    rating: '4.5',

}

export default function ViewBook(){
    // const[hover, setHover] = useState(null);

    return(
        <div className= 'ViewBook'>
            <div className= 'wrapper'>
                <div className= 'panelRight'>
                    
                <div className= 'book-cover'>
                    <img src= {`/bookCovers/${book.ISBN}.jpg`} alt={book.title}/>
                </div> 
                <div className= 'book-info'>
                    <h3 className= 'book-title'>{book.title}</h3> 
                    <h2 className= 'book-author'>{book.author}</h2>
                    <h4 className= 'book-genre'>Genre: {book.genre}</h4>
                    <h4 className= 'book-description'>Description: {book.description}</h4>
                    <h4 className= 'book-rating'>Rating: {book.rating}</h4>
                </div>
                {/* if (loggedIn === true){ */}
                <div className= 'book-buttons'>
                    <button className= 'want'>Add to "Want to Read"</button>
                    <button className= 'current'>Add to "Currently Reading"</button>
                    <button className= 'read'>Add to "Read"</button>
                    <button className= 'leave-review'>Leave a review</button>
                </div>
                {/* } */}
                <div className= 'book-reviews'>
                    <h6 className= 'stars'>review rating</h6>
                    <div className= 'review'>
                            <p className= 'review-text'>review text</p>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}