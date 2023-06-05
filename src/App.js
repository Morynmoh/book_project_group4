import React from 'react';
import './App.css';
import BookItem from './components/bookItem/BookItem';
import BookDetails from './components/bookDetails/BookDetails';
import BookList from './components/bookList/BookList';
import Favourites from './components/favourites/Favourites';
import Header from './components/header/Header';
import Search from './components/search/Search;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          Group 4 Book Project
      
      </header>
      <Favourites />  
      <Search />
      <BookItem />
      <BookDetails />
      <BookList />
      <Header />


    </div>
  );
}

export default App;
