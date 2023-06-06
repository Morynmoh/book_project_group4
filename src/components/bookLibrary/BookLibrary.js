import React from 'react';
import './bookLibrary.css';
import Footer from '../footer/Footer';
import BookList from '../bookList/BookList';

const BookLibrary = () => {
  return (
    <div>
      <BookList />
      <Footer />
    </div>
  )
}

export default BookLibrary
//Parent Container export to App.js

//landing page - with search button and a list
//Search component and bookList component and Footer
//Search component to display a certain number