import React, { useState } from "react";
import BookCard from "../bookCard/BookCard";
import './bookList.css';

const BookList = ({ bookItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("allBooks");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredBooks = selectedCategory === "allBooks" ? bookItems : bookItems.filter((item) => item.category === selectedCategory)
   
  return (
    <div className="bookList">
      <div className="filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="allBooks">All Books</option>
          <option value="bestSold">Best Sellers</option>
        </select>
      </div>
      <div className="bookItems">
        {bookItems.map((item) => (
          <BookCard key={item.id} book={item.book} category={item.category} />
        ))}
      </div>
    </div>
  )
}

export default BookList

//BookList - Mike
//to categorise books - e.g. Best Seller depending on rating
