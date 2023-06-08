import './bookCard.css';
import React from 'react';

const BookCard = ({ book, onAddToFavorites, onRemoveFromFavorites }) => {
  if (!book) {
    return null; // Handle case when book is undefined
  }

  const { volumeInfo } = book;

  const addToFavorites = () => {
    if (onAddToFavorites) {
      onAddToFavorites(book);
    }
  };

  const removeFromFavorites = () => {
    if (onRemoveFromFavorites) {
      onRemoveFromFavorites(book);
    }
  };

  return (
    <div>
      {volumeInfo.imageLinks && (
        <img src={volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" />
      )}
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

      {onRemoveFromFavorites && (
        <button onClick={removeFromFavorites}>Remove from Favorites</button>
      )}
      {!onRemoveFromFavorites && (
        <button onClick={addToFavorites}>Add to Favorites</button>
      )}
    </div>
  );
};

export default BookCard;
