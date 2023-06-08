import React, { useState } from "react";
import Search from "../search/Search";
import FavoritesList from "../favoritesList/FavoritesList";
import Footer from "../footer/Footer";
import BookList from "../bookList/BookList";

import "./bookLibrary.css";

function BookLibrary() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFromFavorites = (book) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favBook) => favBook.id !== book.id)
    );
  };

  return (
    <div className="BookLibrary">
      <div className="image-container">
        <img src="./images/CA-Preparation-Books.jpg" alt="Background" />
        <div className="search-container">
          <Search onAddToFavorites={addToFavorites} />
        </div>
      </div>

      <div className="side">
        <div className="booklist">
          <BookList onAddToFavorites={addToFavorites} />
        </div>
        <div className="favourites">
          <FavoritesList
            favorites={favorites}
            onRemoveFromFavorites={removeFromFavorites}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookLibrary;
