import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styling/Search.css";
const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [link, setLink] = useState([""]);
  const navigate = useNavigate();
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

  function goToBook(e, ISBN) {
    console.log(ISBN);
    navigate(`/viewBook/` + ISBN);
  }

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
