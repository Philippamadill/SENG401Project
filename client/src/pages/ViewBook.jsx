import React from 'react'
import '../assets/styling/ViewBook.css';
import { useState } from 'react';
import { FaUser} from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {useNavigate} from 'react-router-dom';

export default function ViewBook(ISBN){
    const navigate = useNavigate();
    return(
        <div className= 'ViewBook'>
            <div className= 'wrapper'>
                <div className= 'book-info'>
                    {<h1 className= 'book-title'></h1> }
                    <h2 className= 'book-author'></h2>
                    <h3 className= 'book-genre'></h3>
                    <h4 className= 'book-description'></h4>
                    <h5 className= 'book-rating'></h5>
                </div>
                <div className= 'book-cover'>
                    <img src/>
                </div>
                if (loggedIn === true){
                <div className= 'book-buttons'>
                    <button className= 'want'>Add to "Want to Read"</button>
                    <button className= 'current'>Add to "Currently Reading"</button>
                    <button className= 'read'>Add to "Read"</button>
                    <button className= 'leave-review'>Leave a review</button>
                </div>
                }
                <div className= 'book-reviews'>
                    <h6 className= 'stars'>review rating</h6>
                    <div className= 'review'>
                            <p className= 'review-text'>review text</p>
                        </div>
                    </div>

            </div>
        </div>
    )
}