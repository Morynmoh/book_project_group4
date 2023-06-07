import React from 'react';
import BookCard from './BookCard';
import './favorites.css';

const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  const removeFromFavorites = (book) => {
    onRemoveFromFavorites(book);
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onRemoveFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
