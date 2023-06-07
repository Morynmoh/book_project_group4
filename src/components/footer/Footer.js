import React from 'react';
import Favorites from '../favourites/Favorites';
import './footer.css';

const Footer = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div>
      <p>This is the footer</p>
      <Favorites favorites={favorites} onRemoveFromFavorites={onRemoveFromFavorites} />
    </div>
  );
};

export default Footer;
