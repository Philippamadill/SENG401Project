import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import "../assets/styling/TopPick.css";
import { UserContext , AuthenticationContext} from '../context/UserContext';

const dummyBooks = [
  {
    ISBN: "1234567890123",
    title: "Book Title 1",
    author: "Author 1",
  },
  {
    ISBN: "2345678901234",
    title: "Book Title 2",
    author: "Author 2",
  },
  {
    ISBN: "1",
    title: "Book Title 3",
    author: "Author 3",
  },
  {
    ISBN: "1234567890123",
    title: "Book Title 1",
    author: "Author 1",
  },
  {
    ISBN: "1",
    title: "Book Title 3",
    author: "Author 3",
  },
  // Add more dummy book objects as needed
];

export default function TopPicks() {
  const [alreadyRead, setalreadyRead] = useState([]);
  const [books, setBooks] = useState([]);
  const {userInfo} = useContext(UserContext);
  const {setAuthentication} = useContext(AuthenticationContext);

  useEffect(() => {
      GetAlreadyRead();
  }, []);

  useEffect(() => {
      if (alreadyRead.length > 0) {
          GetBooks();
      }
  }, [alreadyRead]); // Run GetBooks whenever reviews change

  async function GetAlreadyRead() {
      try {
          console.log(userInfo.username)
          const response = await fetch("http://localhost:7003/bookshelf/getBooksFromCurrentlyReading?username="+userInfo.username, {
              method: "POST",
              headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "GET",
                  "Content-Type": "application/json"
              }
          });
          
          if (response.ok) {
              const responseData = await response.json();
              setalreadyRead(responseData);
              console.log(responseData);

          } else {
              console.log("Error Fetching Reviews");
          }
      } catch (error) {
          console.error("Error Fetching Reviews:", error);
      }
  }

  async function GetBooks() {
      console.log(alreadyRead);
      
      for (const read of alreadyRead) {
          console.log(alreadyRead.ISBN);
          try {
              const response = await fetch("http://localhost:7003/book/getBookByISBN?ISBN=" + read.ISBN, {
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
  
  function arrayBufferToBase64( buffer ) {
      var binary = '';
      var bytes = new Uint8Array( buffer );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      console.log(window.btoa( binary ))
      return window.btoa( binary );
  }

  return (
    <div>
        <div className='top-bar'>
            <h2 className='top-bar-title'>Currently Reading</h2>
            <button className="add-book">ADD NEW BOOK</button>
        </div>
        <div className="books-container">
            {books.map(book => (
                <div key={book.ISBN} className="book-card">
                    {book.cover_image && (
                        <img
                            className="book-cover"
                            src={`data:image/jpeg;base64,${arrayBufferToBase64(book.cover_image.data)}`}
                            alt={book.title}
                        />
                    )}
                    <div className="book-info">
                        <div className="title"><h1>{book.book_name}</h1></div>
                        <div className="author">{book.author_name}</div>
                        <button className="remove-book">Remove Book</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}
