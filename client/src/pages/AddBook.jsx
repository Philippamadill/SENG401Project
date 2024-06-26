import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadImage from "../assets/images/up.png";
import "../assets/styling/AddBook.css";


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
  const [pubURL, setPubURL] = useState("");
  const [responseText, setResponseText] = useState("");

  async function HandleAddBook(e) {
    e.preventDefault();
    //If any fields are missing, Display a message on the page
    if (
      coverImage === "" ||
      bookName === "" ||
      bookISBN === "" ||
      bookOverview === "" ||
      authorsName === "" ||
      aboutAuthor === ""
    ) {
      toast.error("All Fields Are Required");
      return;
    }
    //Send image data to the backend to be uploaded to the cloud
    let file= files[0];
    let blob = file.slice(0, file.size)
    const newFile = new File([blob], file.name);
    let formData = new FormData();
    formData.append("imgFile", newFile, newFile.name);
    const resp = await fetch('http://localhost:7003/book/uploadToGCP', {
      method: "POST",
      body: formData,
    });

    if(resp.status == 400){
      setResponseText(
        "There was an error with uploading the image. Please try again"
      );
    }
    else if(resp.status == 200){
      console.log(resp);
      let e = resp.json()
      .then((res) => setPubURL(res.pubURL));
    }
    //Store input data as the body to be sent to the backend
    const body = {
      ISBN: bookISBN,
      book_name: bookName,
      book_description: bookOverview,
      cover_image: "https://storage.googleapis.com/bookbook/" + file.name,
      author_name: authorsName,
      about_author: aboutAuthor,
    };
    //send the data to the backend
    const route = "http://localhost:7003/book/createBook";
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
    if (response.status === 201) {
      //If successful redirect to the books viewBook page
      toast.success("Book Created Successfully");
      navigate(`/viewBook/${bookISBN}`);
    } else {
      //If unsuccessful display an error message
      toast.error("There was an error with creating the book. Please try again");
    }
  }

  // rendering The image previews
  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);
    setHide(true);
    // free memory when imgage is deselected
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
              {!hide && <img src={uploadImage} alt="cloud upload icon" className="uploaded-img"></img>}
              {previews &&
                previews.map((pic) => {
                  return <img src={pic} alt="user uploaded img" className='uploaded-img'/>;
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
              onChange={(e) => setAboutAuthor(e.target.value)}
              required
            ></textarea>
          </div>
          <div id="resp">
            <h2>{responseText}</h2>
          </div>
          <div id="addBookSubmitButton">
            <button className="submit" name="addButton" onClick={HandleAddBook}>
              Add Book
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
