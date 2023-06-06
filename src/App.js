import React from 'react';
import './App.css';
import BookItem from './components/bookItem/BookItem';
import BookLibrary from './components/bookLibrary/BookLibrary';
import BookList from './components/bookList/BookList';
import Favourites from './components/favourites/Favourites';
import Header from './components/header/Header';
import Search from './components/search/Search';
import ReviewForm from './components/reviewForm/ReviewForm';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Group 4: Hungry for Books. need One</h1>
      <Favourites />  
      <Search />
      <BookItem />
      <BookLibrary />
      <BookList />
      <Header />
      <ReviewForm/>


    </div>
  );
}

export default App;
