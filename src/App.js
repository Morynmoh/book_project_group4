import React from 'react';
import './App.css';
import BookCard from './components/bookCard/BookCard';
import BookLibrary from './components/bookLibrary/BookLibrary';
import BookList from './components/bookList/BookList';
import Favourites from './components/favourites/Favourites';
import Header from './components/footer/Footer';
import Search from './components/search/Search';
import ReviewForm from './components/reviewForm/ReviewForm';

function App() {
  return (
    <div className="App">
      <h1 className="App-header"> Group 4:<Search /> </h1>
      {/* <img src= */}
      <Favourites />  
      <BookCard />
      <BookLibrary />
      <BookList />
      <Header />
      <ReviewForm/>

    </div>
  );
}

export default App;
