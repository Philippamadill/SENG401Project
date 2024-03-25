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
  const route = "http://localhost:7003/book/getAllBooks";
  //console.log(route);
  //console.log(rand);
  //console.log(route);
  const response = await fetch(route, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
});
console.log(response);
  //console.log(response);
  const jsonResponse = await response.json();
  if (books.length === 0){
    setBooks(jsonResponse);
  }
  console.log(books.length);
}


  async function getBook() {
    
    if(books.length>0){
    const count = books.length;
    console.log(books.length);
    while(rand.length < 5){
      let randomNumber = Math.floor(Math.random() * count); 
      if (!(rand.includes(randomNumber))){
        rand.push(randomNumber);
      }
    }
    //console.log(books.length);
    if (randBook.length <5){
    //console.log(jsonResponse);
    randBook.push(books[rand[0]]);
    randBook.push(books[rand[1]]);  
    randBook.push(books[rand[2]]);
    randBook.push(books[rand[3]]);
    randBook.push(books[rand[4]]);
    }
    console.log(randBook);
  }
   // counter++;

  } 

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
