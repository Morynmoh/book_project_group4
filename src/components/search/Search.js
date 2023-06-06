import React, { useState } from "react";
import "./search.css";
import axios from "axios";

function Search() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyAB1u5fi4UJdEkFumMpPh44H4HMYEUEXp8"
  );

  function handleChange(event) {
    const book = event.target.value;
    setBook(book); //initialize value to the variable book
  }

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(book);
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data);
        setResult(data.data.items);
        console.log(data.data.items); //40 items only
      });
  }

  return (
    <div className="container">
      <h1>Hungry for Books </h1>
      {/* <img src="./seven-shooter-hPKTYwJ4FUo-unsplash.jpg" alt="books" /> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control  mt-10"
            placeholder="Search for Books ...."
            id="books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>
      {result.map((book) => (
        <a target="blank" href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
        </a>
      ))}
    </div>
  );
}

export default Search;