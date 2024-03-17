import React, { useState, useEffect } from 'react';
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import '../assets/styling/TopPick.css';

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

export default function TopPicks() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        GetBooks();
    }, []);

    

    async function GetBooks() {
        try {
            const response = await fetch("http://localhost:7003/book/getAllBooks", {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                    "Content-Type": "application/json"
                }
            });
            
            if (response.ok) {
                const responseData = await response.json();
                setBooks(responseData);
                console.log(responseData)
            } else {
                console.log("Error Fetching Books");
            }
        } catch (error) {
            console.error("Error Fetching Books:", error);
        }
    }





    return (
        <div>
            <div className='top-bar'>
            <h2 className='top-bar-title'>Top Picks</h2>
            <button className = "add-book">ADD NEW BOOK </button>
            </div>
            <div className="books-container">
                {books.map(book => (
                    
                    <div key={book.ISBN} className="book-card">
                        <img className="book-cover" src={`data:image/jpeg;base64,${book.cover_image}`} alt={book.title} />
                        <div className="book-info">
                            <div className="title"><h1>{book.book_name}</h1></div>
                            <div className="author">{book.author_name}</div>
                            <button className = "remove-book">Remove Book</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
