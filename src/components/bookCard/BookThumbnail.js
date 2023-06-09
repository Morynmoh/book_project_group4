import React from "react";

const BookThumbnail = ({ book, onClick }) => {

  if (!book) return null;
  const volumeInfo = book.volumeInfo;

  return(
      <div className="book-image">
        {volumeInfo.imageLinks && (
          <a href={`/book-details/${book.id}`} target="_blank" rel="noopener noreferrer">
            <img src={volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" onClick={onClick}/>
          </a>
        )}
      </div>
  )
}

export default BookThumbnail;