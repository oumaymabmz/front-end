import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import Navbar from './Navbar';

const ActivityList = () => {
  const { language } = useLanguage();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Simulate fetching activities from a database or API
    fetchActivities();
  }, []);

  const fetchActivities = () => {
    setActivities([
      { title: 'Quad', description: 'Exciting quad biking experience', price: 100, location: 'Desert', images: ['/assets/quad1.png', '/assets/quad2.png', '/assets/quad3.png'] },
      { title: 'Buggy', description: 'Thrilling buggy rides', price: 150, location: 'Desert', images: ['/assets/buggy1.png', '/assets/buggy2.png', '/assets/buggy3.png'] },
      { title: 'Calèche', description: 'Horse-drawn carriage rides', price: 50, location: 'City', images: ['/assets/Calèche1.png', '/assets/Calèche2.png', '/assets/Calèche3.png'] },
      { title: 'Cheval', description: 'Horse riding', price: 80, location: 'Beach', images: ['/assets/cheval1.png', '/assets/cheval2.png', '/assets/cheval3.png'] },
      { title: 'Dromadaire', description: 'Camel rides', price: 60, location: 'Desert', images: ['/assets/dromadaire1.png', '/assets/dromadaire2.png', '/assets/dromadaire3.png'] },
      { title: 'Jet ski', description: 'Jet ski adventure', price: 200, location: 'Sea', images: ['/assets/jetski1.png', '/assets/jetski2.png', '/assets/jetski3.png'] },
      { title: 'Parachute', description: 'Parachuting', price: 300, location: 'Sky', images: ['/assets/parachute1.png', '/assets/parachute2.png', '/assets/parachute3.png'] },
      { title: 'Bateaux pirates', description: 'Pirate ship tours', price: 120, location: 'Sea', images: ['/assets/bateaux_pirates1.png', '/assets/bateaux_pirates2.png', '/assets/bateaux_pirates3.png'] },
      { title: "Tour de l'île", description: 'Island tour', price: 180, location: 'Island', images: ['/assets/tour_ile1.png', '/assets/tour_ile2.png', '/assets/tour_ile3.png'] },
      { title: 'Excursions de désert tataouine+chneni/ksar ghilane+matmata', description: 'Desert excursions', price: 400, location: 'Desert', images: ['/assets/desert_excursion1.png', '/assets/desert_excursion2.png', '/assets/desert_excursion3.png'] },
      { title: 'Location avec chauffeur', description: 'Car rental with driver', price: 250, location: 'City', images: ['/assets/location_chauffeur1.png'] },
      { title: "Transfert à l'aéroport", description: 'Airport transfer', price: 100, location: 'Airport', images: ['/assets/airport_transfer1.png'] }
    ]);
  };

  return (
    <>
      <Navbar language={language} transparent={false} />
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Activity List' : language === 'fr' ? 'Liste des Activités' : 'Aktivitätenliste'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.length === 0 ? (
            <p>
              {language === 'en' ? 'No activities available.' : language === 'fr' ? 'Aucune activité disponible.' : 'Keine Aktivitäten verfügbar.'}
            </p>
          ) : (
            activities.map((activity, index) => (
              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-4">
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
      <img className="w-full h-48 object-cover" src={images[currentIndex]} alt={`Activity ${currentIndex}`} />
      <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ActivityList;
