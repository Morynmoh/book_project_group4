import React from 'react';
import Favorites from '../favorites/Favorites';
import './favoritesList.css';

const FavoritesList = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div>
      <p>Here are the books you like</p>
      <Favorites favorites={favorites} onRemoveFromFavorites={onRemoveFromFavorites} />
    </div>
  );
};

export default FavoritesList;
