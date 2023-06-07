import React, { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import FavoritesList from './components/favoritesList/FavoritesList';

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
      <h1 className="App-header">Group 4: <Search onAddToFavorites={addToFavorites} /></h1>
      <FavoritesList favorites={favorites} onRemoveFromFavorites={removeFromFavorites} />
    </div>
  );
}

export default App;




















// import React from 'react';
// import './App.css';
// import BookCard from './components/bookCard/BookCard';
// import BookLibrary from './components/bookLibrary/BookLibrary';
// import BookList from './components/bookList/BookList';
// import Favourites from './components/favourites/Favourites';
// import Header from './components/footer/Footer';
// import Search from './components/search/Search';

// function App() {
//   return (
//     <div className="App">
//       <h1 className="App-header">Group 4: <Search /></h1>
//       <Favourites />  
//       <BookCard
//         thumbnail="http://books.google.com/books/content?id=p1v6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         title="Eloquent JavaScript, 3rd Edition"
//         subtitle="A Modern Introduction to Programming"
//         kind="books#volume"
//         authors={["Marijn Haverbeke"]}
//         publishedDate="2018-12-04"
//       />
//       <BookLibrary />
//       <BookList />
//       <Header />
//     </div>
//   );
// }

// export default App;
