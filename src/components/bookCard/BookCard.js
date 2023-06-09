import './bookCard.css';
import React from 'react';
import BookThumbnail from './BookThumbnail';

const BookCard = ({ book, onAddToFavorites, onRemoveFromFavorites, onClick }) => {
  if (!book) {
    return null;
  }

  const { volumeInfo } = book;

  const addToFavorites = () => {
    onAddToFavorites && onAddToFavorites(book);
  };

  const removeFromFavorites = () => {
    onRemoveFromFavorites && onRemoveFromFavorites(book);
  };


  return (
    <div className="book-card">
      <img src={BookThumbnail} alt='Thumbnail' onClick={onClick} />
      <div className="book-details">
        {volumeInfo.title && <h3>{volumeInfo.title}</h3>}
        {volumeInfo.subtitle && <h4>{volumeInfo.subtitle}</h4>}
        {book.kind && <p>Kind: {book.kind}</p>}
        {volumeInfo.authors && (
          <p>Authors: {volumeInfo.authors.join(', ')}</p>
        )}
        {volumeInfo.publishedDate && (
          <p>Published Date: {volumeInfo.publishedDate}</p>
        )}
        {volumeInfo.previewLink && (
          <a target="_blank" rel="noopener noreferrer" href={volumeInfo.previewLink}>
            Preview Link
          </a>
        )}

        {onRemoveFromFavorites ? (
          <button onClick={removeFromFavorites}>Remove from Favorites</button>
        ) : (
          <button onClick={addToFavorites}>Add to Favorites</button>
        )}
      </div>
    </div>
  );
};


export default BookCard;
