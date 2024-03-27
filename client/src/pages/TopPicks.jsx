import React, { useEffect, useState } from "react";
//import Math from 'math';
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import { useNavigate } from "react-router-dom";
import "../assets/styling/TopPick.css";

var rand = [];
var counter = 0;

export default function TopPicks() {
  const [books, setBooks] = useState([]);
  const randBook = [];
  const navigate = useNavigate();
  getBooksArray();
  getBook();

  
async function getBooksArray(){
  //route to backend to get books
  const route = "http://localhost:7003/book/getAllBooks";
  //await response from server
  const response = await fetch(route, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
});
  //await json response containing book data
  const jsonResponse = await response.json();
  if (books.length === 0){
    //set the books array to the json data
    setBooks(jsonResponse);
  }
  console.log(books.length);
}


  async function getBook() {
    
    if(books.length>0){
      const count = books.length;

      while(rand.length < 5){
        //generate a random number
        let randomNumber = Math.floor(Math.random() * count); 
        if (!(rand.includes(randomNumber))){
          rand.push(randomNumber);
        }
      }
      //push 5 random books onto the book array
      if (randBook.length <5){
        randBook.push(books[rand[0]]);
        randBook.push(books[rand[1]]);  
        randBook.push(books[rand[2]]);
        randBook.push(books[rand[3]]);
        randBook.push(books[rand[4]]);
      }
    }
  } 
  //call get books
  getBook();


  return (
    <div>
      <div className="top-bar">
        <h2 className="top-bar-title">Top Picks</h2>
      </div>
      
      <div className="books-container">
        {randBook.map((item) => (
          <div
            className="book"
            key={item.ISBN}
            value={item.ISBN}
            onClick={(e) => {
              navigate(`/viewBook/` + item.ISBN);
            }}
          >
            <h2 className="title">{item.book_name}</h2>
            <p className="author">By: {item.author_name}</p>
            <img
              className="cover"
              src={`${item.cover_image}`}
              alt={item.book_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
