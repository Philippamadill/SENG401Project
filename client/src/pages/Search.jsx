import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styling/Search.css";
const Search = () => {
const [search, setSearch] = useState("");
const [books, setBooks] = useState([]);
const [link, setLink] = useState([""]);
const navigate = useNavigate();

async function getBooks() {
  //route to the server
  const route = "http://localhost:7003/book/getAllBooks";
  //await response from the server for data on all books
  const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //await json response containing book information
    const resp = await response.json();
    //set the list of books to the response
    setBooks(resp);
  }

  function goToBook(e, ISBN) {
    //navigate to the specific books view book page
    navigate(`/viewBook/` + ISBN);
  }

  //call get books on page load
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <div id="header">
        <form id="searchContainer">
          <input
            type="text"
            placeholder="Search"
            id="searchBar"
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
          ></input>
        </form>
        <span id="addBook">
          <Link to="/addBook">Add Book</Link>
        </span>
      </div>
      {books
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.book_name.toLowerCase().startsWith(search.toLowerCase());
        })
        .map((item) => (
          <div
            className="book"
            key={item.ISBN}
            value={item.ISBN}
            onClick={(e) => {
              goToBook(e, item.ISBN);
            }}
          >
            <h2 className="title">{item.book_name}</h2>
            <p className="author">By {item.author_name}</p>
            <img
              className="cover"
              src={item.cover_image}
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
