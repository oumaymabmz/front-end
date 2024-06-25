import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ActivityList = ({ activities }) => {
  const { language } = useLanguage();
  const [bookedActivities, setBookedActivities] = useState([]);
  const [reviews, setReviews] = useState([]);

  const handleBookClick = (activityTitle) => {
    setBookedActivities([...bookedActivities, activityTitle]);
  };

  const isBooked = (activityTitle) => {
    return bookedActivities.includes(activityTitle);
  };

  const handleReviewSubmit = (activityTitle, reviewText, rating) => {
    const newReview = {
      activityTitle,
      reviewText,
      rating,
      reviewer: 'John Doe' // Replace this with the actual logged-in user name
    };
    setReviews([...reviews, newReview]);
  };

  const getReviewsForActivity = (activityTitle) => {
    return reviews.filter(review => review.activityTitle === activityTitle);
  };

  return (
    <>
      <Navbar language={language} transparent={false} />
      <div className="bg-white p-6 rounded shadow-md container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {language === 'en' ? 'Activity List' : language === 'fr' ? 'Liste des Activités' : 'Aktivitätenliste'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.length === 0 ? (
            <p>
              {language === 'en' ? 'No activities available.' : language === 'fr' ? 'Aucune activité disponible.' : 'Keine Aktivitäten verfügbar.'}
            </p>
          ) : (
            activities.map((activity, index) => (
              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-4 transform transition-transform hover:scale-105">
                <ActivityCarousel images={activity.images} />
                <div className="p-4">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">{activity.title}</h5>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'Location:' : language === 'fr' ? 'Lieu:' : 'Ort:'} {activity.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'Price:' : language === 'fr' ? 'Prix:' : 'Preis:'} ${activity.price}
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleBookClick(activity.title)}
                      className={`px-4 py-2 rounded w-full ${isBooked(activity.title) ? 'bg-gray-500' : 'bg-green-500'} text-white transition-colors duration-300`}
                      disabled={isBooked(activity.title)}
                    >
                      {isBooked(activity.title) ? (language === 'en' ? 'Booked' : language === 'fr' ? 'Réservé' : 'Gebucht') : (language === 'en' ? 'Book Now' : language === 'fr' ? 'Réserver' : 'Jetzt buchen')}
                    </button>
                  </div>
                  <ReviewForm activityTitle={activity.title} onSubmit={handleReviewSubmit} language={language} />
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">{language === 'en' ? 'Reviews' : language === 'fr' ? 'Avis' : 'Bewertungen'}</h4>
                    {getReviewsForActivity(activity.title).length === 0 ? (
                      <p>{language === 'en' ? 'No reviews yet.' : language === 'fr' ? 'Pas encore d\'avis.' : 'Noch keine Bewertungen.'}</p>
                    ) : (
                      getReviewsForActivity(activity.title).map((review, index) => (
                        <div key={index} className="p-4 border-b border-gray-200 bg-gray-50 rounded-lg mt-2">
                          <p className="font-semibold">{review.activityTitle}</p>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <FontAwesomeIcon key={i} icon={faStar} className={i < review.rating ? "text-yellow-500" : "text-gray-300"} />
                            ))}
                          </div>
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
    </>
  );
};

const ActivityCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out" src={images[currentIndex]} alt={`Activity ${currentIndex}`} />
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

const ReviewForm = ({ activityTitle, onSubmit, language }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText && rating) {
      onSubmit(activityTitle, reviewText, rating);
      setReviewText('');
      setRating(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-gray-100 p-4 rounded-lg">
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder={language === 'en' ? 'Leave a review' : language === 'fr' ? 'Laisser un avis' : 'Hinterlassen Sie eine Bewertung'}
        required
      />
      <div className="flex items-center mt-2">
        <span className="mr-2">{language === 'en' ? 'Rating:' : language === 'fr' ? 'Note:' : 'Bewertung:'}</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'} transition-colors duration-300`}
            onClick={() => setRating(star)}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        ))}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full transition-colors duration-300 hover:bg-blue-600">
        {language === 'en' ? 'Submit Review' : language === 'fr' ? 'Soumettre' : 'Übermitteln'}
      </button>
    </form>
  );
};

export default ActivityList;
