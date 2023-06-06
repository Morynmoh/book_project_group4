import React, {useState} from 'react';
import './reviewForm.css';

const ReviewForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Review submitted:', { title, content, rating });
    // Reset the form
    setTitle('');
    setContent('');
    setRating(0);
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };


  // Delete Review

  // POST REQUEST
  return (
    <div className="form-container">
   <form onSubmit={handleSubmit}>
    <h1>Unleash Your Inner Critic: Review the Enthralling Book You Just Read</h1>
    <p> 
      Express your opinions, share your reading experiences, and connect with fellow book enthusiasts.
      Your review will help readers make informed decisions, discover new books, 
      and engage in meaningful discussions about their favorite reads.
    </p>
      <label>
        Book Title:
        <input type="text" 
        className="reviews-form"
        placeholder='Which book would you like to review?'
        value={title} onChange={handleTitleChange} 
        required />
      </label>
      
      <br />

      <label>
        Review:
        <textarea value={content} 
        onChange={handleContentChange} 
        placeholder='Write your review?'
        className="reviews-form"
        required />
      </label>

      <br />

      <label>
        Rating:
        <input type="number"
         min="0" max="5" 
         value={rating} 
         onChange={handleRatingChange} 
         required />
      </label>
      
      <br />
      
      <button type="submit" className='submit-button' style={{ background: "Green" }}>Submit Review</button>
    </form>
  </div>
  )};

export default ReviewForm;


