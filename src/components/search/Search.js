import React, { useState } from "react";
import "./search.css";
import axios from "axios";

function Search() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyAB1u5fi4UJdEkFumMpPh44H4HMYEUEXp8");
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(3); // Number of images to display per page

  function handleChange(event) {
    const book = event.target.value;
    setBook(book); //initialize value to the variable book
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        setResult(data.data.items);
        setCurrentPage(1); // Reset current page when new search results are fetched
      });
  }

  // Calculate the index range for the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = result.slice(indexOfFirstImage, indexOfLastImage);

  // Update the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>Hungry for Books</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control mt-10"
            placeholder="Search for Books ...."
            id="books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>
      <div className="book-container">
        {currentImages.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
      {result.length > imagesPerPage && (
        <Pagination
          imagesPerPage={imagesPerPage}
          totalImages={result.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </div>
  );
}

const BookCard = ({ book }) => {
  const { title, authors, imageLinks, previewLink } = book.volumeInfo;

  return (
    <div className="book-card">
      <a target="_blank" rel="noopener noreferrer" href={previewLink}>
        <img src={imageLinks?.thumbnail} alt={title} />
      </a>
      <h3>{title}</h3>
      <p>{authors?.join(", ")}</p>
    </div>
  );
};

const Pagination = ({ imagesPerPage, totalImages, currentPage, paginate }) => {
  const pageNumbers = [];

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  // Generate an array of page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>

);
};


export default Search;


// import React, { useState } from "react";
// import "./search.css";
// import axios from "axios";

// function Search() {
//   const [book, setBook] = useState("");
//   const [result, setResult] = useState([]);
//   const [apiKey, setApiKey] = useState(
//     "AIzaSyAB1u5fi4UJdEkFumMpPh44H4HMYEUEXp8"
//   );

//   function handleChange(event) {
//     const book = event.target.value;
//     setBook(book); //initialize value to the variable book
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     //console.log(book);
//     axios
//       .get(
//         "https://www.googleapis.com/books/v1/volumes?q=" +
//           book +
//           "&key=" +
//           apiKey +
//           "&maxResults=40"
//       )
//       .then((data) => {
//         console.log(data);
//         setResult(data.data.items);
//         console.log(data.data.items); //40 items only
//       });
//   }

//   return (
//     <div className="container">
//       <h1>Hungry for Books </h1>
//       {/* <img src="./seven-shooter-hPKTYwJ4FUo-unsplash.jpg" alt="books" /> */}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             onChange={handleChange}
//             className="form-control  mt-10"
//             placeholder="Search for Books ...."
//             id="books"
//             autoComplete="off"
//           />
//         </div>
//         <button type="submit" className="btn btn-danger">
//           Search
//         </button>
//       </form>
//       {result.map((book) => (
//         <a target="blank" href={book.volumeInfo.previewLink}>
//           <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
//         </a>
//       ))}
//     </div>
//   );
// }

// export default Search;