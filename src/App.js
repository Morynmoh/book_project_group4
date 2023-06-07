import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import Footer from "./components/favoritesList/FavoritesList";
import Footer2 from "./components/footer2/Footer2";
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
      <Footer
        favorites={favorites}
        onRemoveFromFavorites={removeFromFavorites}
      />
    </div>
  </div>
  
  <Footer2 />
</div>

  );
}

export default App;
