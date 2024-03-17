import React, { useState, useEffect } from 'react';
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import '../assets/styling/TopPick.css';
import { UserContext , AuthenticationContext} from '../context/UserContext';
import { useContext } from 'react';
const dummyBooks = [
    
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

    const {userInfo} = useContext(UserContext);
    const {setAuthentication} = useContext(AuthenticationContext);
    const [books, setBooks] = useState(dummyBooks);

    useEffect(() => {
        async function fetchBooks() {
            try {
                //const response = await axios.get('/api/books'); // Assuming your API endpoint is '/api/books'
                //setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        }
        fetchBooks();
    }, []);

    return (
        <div>

            <div className='top-bar'>
            <h2 className='top-bar-title'>Want To Read</h2>
            <button className = "add-book">ADD NEW BOOK </button>
            </div>
            <div className="books-container">
                {books.map(book => (
                    <div key={book.ISBN} className="book-card">
                        <img className = "book-cover"src={`/bookCovers/${book.ISBN}.jpg`} alt={book.title} />
                        <div className="book-info">
                            <div className="title"><h1>{book.title}</h1></div>
                            <div className="author">{book.author}</div>
                            <button className = "remove-book">Remove Book</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
