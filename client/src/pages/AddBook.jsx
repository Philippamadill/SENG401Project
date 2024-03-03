import uploadImage from "../assets/images/up.png";
import "../assets/styling/AddBook.css";
import { useEffect, useState } from "react";

function AddBook() {
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();
  const [hide, setHide] = useState();
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
              {/*     <h3>Drag & Drop file or browse</h3>
              <p>Supported formats: JPEG & PNG</p> */}
            </div>
            <div className="input-oneline">
              <input
                type="file"
                accept="image/jpeg, image/png"
                single
                required
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setFiles(e.target.files);
                  }
                }}
              />
            </div>
          </div>
          <div className="input-oneline" id="bookName">
            <label htmlFor="bookName">
              Book Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="bookName"
              placeholder="Book Name"
              required
            ></input>
          </div>
          <div className="input-oneline" id="bookISBN">
            <label htmlFor="bookISBN">
              Book ISBN <span className="required">*</span>
            </label>
            <input
              type="text"
              id="bookISBN"
              placeholder="Book ISBN"
              required
            ></input>
          </div>
          <div className="input-large" id="bookOverview">
            <label htmlFor="bookOverview">
              Book Overview <span className="required">*</span>
            </label>
            <textarea
              id="bookOverview"
              placeholder="In a world where one race reigns supreme, who can stop them?"
              required
            ></textarea>
          </div>
          <div className="input-oneline" id="authorName">
            <label htmlFor="authorName">
              Author's Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="authorName"
              placeholder="Author's Name"
              required
            ></input>
          </div>
          <div className="input-large" id="aboutAuthor">
            <label htmlFor="aboutAuthor">
              About the Author <span className="required">*</span>
            </label>
            <textarea
              id="aboutAuthor"
              placeholder="Born and raised in St. Cloud Minnesota Marshal always had an interest in football"
              required
            ></textarea>
          </div>
          <div id="submitButton">
            <button className="submit" name="addButton" type="submit">
              Add Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
