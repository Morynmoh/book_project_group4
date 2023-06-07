import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import FavoritesList from "./components/favoritesList/FavoritesList";
import Footer from "./components/footer/Footer";
import BookList from "./components/bookList/BookList";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    setFavorites([...favorites, book]);
  };

  const removeFromFavorites = (book) => {
    setFavorites(favorites.filter((favBook) => favBook.id !== book.id));
  };

  return (
<div className="App">
  <div className="image-container">
    <img src="./images/CA-Preparation-Books.jpg" alt="Background" />
    <div className="search-container">
      <Search onAddToFavorites={addToFavorites} />
    </div>
  </div>
  
  <div className="side">
    <div className="booklist">
      <BookList />
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

export default App;
