import { useState, useEffect } from "react";
import "../assets/styling/Search.css";
const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  async function getBooks() {
    const route = "http://localhost:7003/book/getAllBooks";
    console.log(route);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resp = await response.json();
    setBooks(resp);
    console.log(resp);
    console.log(books.length);
  }
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
<<<<<<< HEAD
          id="searchBar"
=======
          id="searchbar"
>>>>>>> 0920ed06d073a308ccce06ca376f1e79520a0385
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        ></input>
      </form>
      {books
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.book_name.toLowerCase().startsWith(search);
        })
        .map((item) => (
          <div className="book" key={item.ISBN}>
            <h2 className="title">Title: {item.book_name}</h2>
            <p className="author">By: {item.book_name}</p>
            <img
              className="cover"
              src={`data:image/jpeg;base64,${item.cover_image}`}
              alt={item.book_name}
            />
          </div>
        ))}
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Search;