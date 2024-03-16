import uploadImage from "../assets/images/up.png";
import "../assets/styling/AddBook.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddBook() {
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();
  const [hide, setHide] = useState();

  const navigate = useNavigate();
  const [coverImage, setCoverImage] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookISBN, setBookISBN] = useState("");
  const [bookOverview, setBookOverview] = useState("");
  const [authorsName, setAuthorsName] = useState("");
  const [aboutAuthor, setAboutAuthor] = useState("");
  const [responseText, setResponseText] = useState("");
  async function HandleAddBook(e) {
    e.preventDefault();

    if (
      coverImage === "" ||
      bookName === "" ||
      bookISBN === "" ||
      bookOverview === "" ||
      authorsName === "" ||
      aboutAuthor === ""
    ) {
      setResponseText("All Fields Are Required");
      return;
    }

    var data = {};
    var error = null;

    const body = {
      ISBN: bookISBN,
      book_name: bookName,
      book_description: bookOverview,
      cover_image: coverImage,
      author_name: authorsName,
      about_author: aboutAuthor,
    };

    const route = "http://localhost:7003/book/createBook";
    console.log(route);
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
    if (response.status === 201) {
      setResponseText("Book Created Successfully");
    } else {
      setResponseText(
        "There was an error with creating the book. Please try again"
      );
    }
  }

  // rendering previews
  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);
    setHide(true);
    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);
  function changeImage(e) {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  }
  return (
    <div id="container">
      <h1 className="heading">Add Book: New Entry</h1>
      <form className="addBook">
        <div id="bookForm">
          <div className="uploadImage" id="uploadImage">
            <p>
              Cover Image <span className="required">*</span>
            </p>
            <div id="uploadArea">
              {!hide && <img src={uploadImage} alt="cloud upload icon"></img>}
              {previews &&
                previews.map((pic) => {
                  return <img src={pic} alt="user uploaded img" />;
                })}
            </div>
            <div className="input-oneline">
              <input
                value={coverImage}
                type="file"
                accept="image/jpeg, image/png"
                single
                required
                onChange={(e) => {
                  changeImage(e);
                  setCoverImage(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input-oneline" id="bookName">
            <label htmlFor="bookName">
              Book Name <span className="required">*</span>
            </label>
            <input
              value={bookName}
              type="text"
              id="bookName"
              placeholder="Book Name"
              onChange={(e) => setBookName(e.target.value)}
              required
            ></input>
          </div>
          <div className="input-oneline" id="bookISBN">
            <label htmlFor="bookISBN">
              Book ISBN <span className="required">*</span>
            </label>
            <input
              value={bookISBN}
              type="text"
              id="bookISBN"
              placeholder="Book ISBN"
              onChange={(e) => setBookISBN(e.target.value)}
              required
            ></input>
          </div>
          <div className="input-large" id="bookOverview">
            <label htmlFor="bookOverview">
              Book Overview <span className="required">*</span>
            </label>
            <textarea
              value={bookOverview}
              id="bookOverview"
              placeholder="In a world where one race reigns supreme, who can stop them?"
              onChange={(e) => setBookOverview(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="input-oneline" id="authorName">
            <label htmlFor="authorName">
              Author's Name <span className="required">*</span>
            </label>
            <input
              value={authorsName}
              type="text"
              id="authorName"
              placeholder="Author's Name"
              onChange={(e) => setAuthorsName(e.target.value)}
              required
            ></input>
          </div>
          <div className="input-large" id="aboutAuthor">
            <label htmlFor="aboutAuthor">
              About the Author <span className="required">*</span>
            </label>
            <textarea
              value={aboutAuthor}
              id="aboutAuthor"
              placeholder="Born and raised in St. Cloud Minnesota Marshal always had an interest in football"
              onChange={(e) => setAboutAuthor(e.target.value)}
              required
            ></textarea>
          </div>
          <div id="resp">
            <h2>{responseText}</h2>
          </div>
          <div id="submitButton">
            <button className="submit" name="addButton" onClick={HandleAddBook}>
              Add Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
