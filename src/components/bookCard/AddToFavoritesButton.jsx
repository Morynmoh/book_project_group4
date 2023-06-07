import React from 'react';

const AddToFavoritesButton = ({ book, onAddToFavorites }) => {
  const addToFavorites = () => {
    // Call the onAddToFavorites callback function and pass the book as an argument
    onAddToFavorites(book);
  };

  return (
    <button onClick={addToFavorites}>Add to Favorites</button>
  );
};

export default AddToFavoritesButton;
