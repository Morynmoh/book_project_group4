import React from 'react';
import './App.css';
import BookItem from './components/bookItem/BookItem';
import BookDetails from './components/bookDetails/BookDetails';
import BookList from './components/bookList/BookList';
import Favourites from './components/favourites/Favourites';
import Search from './components/search/Search';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Group 4 Book Project
      </header>
      <Favourites />  
      <BookItem />
      <BookDetails />
      <BookList />
      <Header />
      <Search />

    </div>
  );
}

export default App;
