import React, { useState } from 'react';

const CarList = ({ cars, reviews, onAddReview, bookedItems, onAddToCart }) => {
  const handleReviewSubmit = (itemTitle, reviewText, rating) => {
    onAddReview('cars', itemTitle, reviewText, rating);
  };

  const isBooked = (itemTitle) => {
    return bookedItems.some(item => item.type === 'cars' && item.itemTitle === itemTitle);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Car List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length === 0 ? (
          <p>No cars available.</p>
        ) : (
          cars.map((car, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-4 transform transition-transform hover:scale-105">
              <CarCarousel images={car.images} />
              <div className="p-4">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{car.title}</h5>
                <p className="text-sm text-gray-600">{car.description}</p>
                <p className="text-sm text-gray-600">Location: {car.location}</p>
                <p className="text-sm text-gray-600">Price: ${car.price}</p>
                <div className="mt-4">
                  <button
                    onClick={() => onAddToCart('cars', car.title)}
                    className={`px-4 py-2 rounded w-full ${isBooked(car.title) ? 'bg-gray-500' : 'bg-green-500'} text-white`}
                    disabled={isBooked(car.title)}
                  >
                    {isBooked(car.title) ? 'Booked' : 'Book Now'}
                  </button>
                </div>
                <ReviewForm itemTitle={car.title} onSubmit={handleReviewSubmit} />
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Reviews</h4>
                  {reviews.filter(review => review.type === 'cars' && review.itemTitle === car.title).length === 0 ? (
                    <p>No reviews yet.</p>
                  ) : (
                    reviews.filter(review => review.type === 'cars' && review.itemTitle === car.title).map((review, index) => (
                      <div key={index} className="p-4 border-b border-gray-200">
                        <p className="font-semibold">{review.itemTitle}</p>
                        <p>{'⭐'.repeat(review.rating)}</p>
                        <p>{review.reviewText}</p>
                        <p className="text-sm text-gray-600">- {review.reviewer}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const CarCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out" src={images[currentIndex]} alt={`Car ${currentIndex}`} />
      {images.length > 1 && (
        <>
          <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

const ReviewForm = ({ itemTitle, onSubmit }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText && rating) {
      onSubmit(itemTitle, reviewText, rating);
      setReviewText('');
      setRating(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Leave a review"
        required
      />
      <div className="flex items-center mt-2">
        <span className="mr-2">Rating:</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
            onClick={() => setRating(star)}
          >
            ⭐
          </button>
        ))}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
        Submit Review
      </button>
    </form>
  );
};

export default CarList;
