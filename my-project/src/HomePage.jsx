import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import Navbar from './Navbar';
import Modal from './Modal';
import LocationMap from './LocationMap';

const HomePage = () => {
  const { language, setLanguage } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  const aboutCompanyRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 6; // Start the video at 6 seconds
      video.play();
      const handleTimeUpdate = () => {
        if (video.currentTime >= 108) { // Reset to 6 seconds when the video reaches 108 seconds
          video.currentTime = 6;
          video.play();
        }
      };
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 15000); // Change slide every 15 seconds
    return () => clearInterval(slideInterval);
  }, []);

  const slides = [
    {
      title: language === 'en' ? "Travel to Djerba" : language === 'fr' ? "Voyage à Djerba" : "Reise nach Djerba",
      description: language === 'en' ? "We guide you to find your best option in Djerba." : language === 'fr' ? "Nous vous guidons pour trouver votre meilleure option à Djerba." : "Wir helfen Ihnen, die beste Option in Djerba zu finden.",
      image: "/assets/tour.mp4",
      type: 'video'
    },
    {
      title: language === 'en' ? "House Rental" : language === 'fr' ? "Location Maison" : "Hausvermietung",
      description: language === 'en' ? "Find the perfect house rental for your stay." : language === 'fr' ? "Trouvez la maison parfaite pour votre séjour." : "Finden Sie die perfekte Hausvermietung für Ihren Aufenthalt.",
      image: "/assets/maison.gif",
      type: 'image'
    },
    {
      title: language === 'en' ? "Car Rental" : language === 'fr' ? "Location Voiture" : "Autovermietung",
      description: language === 'en' ? "Explore Djerba with our car rental services." : language === 'fr' ? "Explorez Djerba avec nos services de location de voiture." : "Entdecken Sie Djerba mit unseren Autovermietungsdiensten.",
      image: "/assets/voiture.gif",
      type: 'image'
    },
    {
      title: language === 'en' ? "Activities" : language === 'fr' ? "Activités" : "Aktivitäten",
      description: language === 'en' ? "Enjoy various activities during your stay." : language === 'fr' ? "Profitez de diverses activités pendant votre séjour." : "Genießen Sie verschiedene Aktivitäten während Ihres Aufenthalts.",
      image: "/assets/cheval.gif",
      type: 'image'
    },
  ];

  const campingOptions = [
    {
      title: language === 'en' ? "Car Rental" : language === 'fr' ? "Location Voiture" : "Autovermietung",
      description: language === 'en' ? "Find the best car rental options for your needs." : language === 'fr' ? "Trouvez les meilleures options de location de voiture pour vos besoins." : "Finden Sie die besten Mietwagenoptionen für Ihre Bedürfnisse.",
      image: "/assets/car.jpg",
      icons: ["🚗", "🔑", "🛣️"],
      path: "/cars"
    },
    {
      title: language === 'en' ? "House Rental" : language === 'fr' ? "Location Maison" : "Hausvermietung",
      description: language === 'en' ? "Discover a variety of house rental options for your stay." : language === 'fr' ? "Découvrez une variété d'options de location de maison pour votre séjour." : "Entdecken Sie eine Vielzahl von Mietoptionen für Ihren Aufenthalt.",
      image: "/assets/maison.png",
      icons: ["🏠", "🔑", "🌆"],
      path: "/houses"
    },
    {
      title: language === 'en' ? "Activities" : language === 'fr' ? "Activités" : "Aktivitäten",
      description: language === 'en' ? "Engage in exciting activities during your trip." : language === 'fr' ? "Participez à des activités passionnantes pendant votre voyage." : "Nehmen Sie an aufregenden Aktivitäten während Ihrer Reise teil.",
      image: "/assets/activite.jpg",
      icons: ["🎉", "🏖️", "🚴"],
      path: "/activities"
    },
  ];

  const services = [
    {
      icon: "🪂",
      title: language === 'en' ? "Parachute" : language === 'fr' ? "Parachute" : "Fallschirm",
      description: language === 'en' ? "Experience the thrill of skydiving." : language === 'fr' ? "Vivez le frisson du parachutisme." : "Erleben Sie den Nervenkitzel des Fallschirmspringens.",
      ageRestriction: language === 'en' ? "Minimum age: 18 years" : language === 'fr' ? "Âge minimum : 18 ans" : "Mindestalter: 18 Jahre",
      advice: language === 'en' ? "Ensure you are in good health and not afraid of heights." : language === 'fr' ? "Assurez-vous d'être en bonne santé et de ne pas avoir peur des hauteurs." : "Stellen Sie sicher, dass Sie bei guter Gesundheit sind und keine Höhenangst haben.",
    },
    {
      icon: "🏇",
      title: language === 'en' ? "Horse Riding" : language === 'fr' ? "Monter à Cheval" : "Reiten",
      description: language === 'en' ? "Enjoy scenic horse rides." : language === 'fr' ? "Profitez de balades à cheval pittoresques." : "Genießen Sie malerische Ausritte.",
      ageRestriction: language === 'en' ? "Minimum age: 12 years" : language === 'fr' ? "Âge minimum : 12 ans" : "Mindestalter: 12 Jahre",
      advice: language === 'en' ? "Wear comfortable clothing and follow the instructor's guidance." : language === 'fr' ? "Portez des vêtements confortables et suivez les instructions de l'instructeur." : "Tragen Sie bequeme Kleidung und folgen Sie den Anweisungen des Ausbilders.",
    },
    {
      icon: "🐪",
      title: language === 'en' ? "Camel Riding" : language === 'fr' ? "Monter sur un Chameau" : "Kamelreiten",
      description: language === 'en' ? "Explore the desert on a camel." : language === 'fr' ? "Explorez le désert à dos de chameau." : "Erkunden Sie die Wüste auf einem Kamel.",
      ageRestriction: language === 'en' ? "Minimum age: 10 years" : language === 'fr' ? "Âge minimum : 10 ans" : "Mindestalter: 10 Jahre",
      advice: language === 'en' ? "Stay hydrated and protect yourself from the sun." : language === 'fr' ? "Restez hydraté et protégez-vous du soleil." : "Bleiben Sie hydratisiert und schützen Sie sich vor der Sonne.",
    },
    {
      icon: "🚤",
      title: language === 'en' ? "Jet Ski" : language === 'fr' ? "Jet Ski" : "Jetski",
      description: language === 'en' ? "Ride the waves with our jet skis." : language === 'fr' ? "Surfez sur les vagues avec nos jet-skis." : "Reiten Sie die Wellen mit unseren Jetskis.",
      ageRestriction: language === 'en' ? "Minimum age: 16 years" : language === 'fr' ? "Âge minimum : 16 ans" : "Mindestalter: 16 Jahre",
      advice: language === 'en' ? "Wear a life jacket and follow safety instructions." : language === 'fr' ? "Portez un gilet de sauvetage et suivez les consignes de sécurité." : "Tragen Sie eine Schwimmweste und befolgen Sie die Sicherheitsanweisungen.",
    },
    {
      icon: "🏍️",
      title: language === 'en' ? "Quad Ride" : language === 'fr' ? "Balade en Quad" : "Quadfahrt",
      description: language === 'en' ? "Explore the terrain on a quad bike." : language === 'fr' ? "Explorez le terrain en quad." : "Erkunden Sie das Gelände auf einem Quad.",
      ageRestriction: language === 'en' ? "Minimum age: 16 years" : language === 'fr' ? "Âge minimum : 16 ans" : "Mindestalter: 16 Jahre",
      advice: language === 'en' ? "Wear protective gear and drive safely." : language === 'fr' ? "Portez des équipements de protection et conduisez prudemment." : "Tragen Sie Schutzkleidung und fahren Sie vorsichtig.",
    },
    {
      icon: "🚙",
      title: language === 'en' ? "Buggy Ride" : language === 'fr' ? "Balade en Buggy" : "Buggyfahrt",
      description: language === 'en' ? "Experience the thrill of buggy rides." : language === 'fr' ? "Vivez le frisson des balades en buggy." : "Erleben Sie den Nervenkitzel von Buggyfahrten.",
      ageRestriction: language === 'en' ? "Minimum age: 16 years" : language === 'fr' ? "Âge minimum : 16 ans" : "Mindestalter: 16 Jahre",
      advice: language === 'en' ? "Wear protective gear and drive safely." : language === 'fr' ? "Portez des équipements de protection et conduisez prudemment." : "Tragen Sie Schutzkleidung und fahren Sie vorsichtig.",
    },
    {
      icon: "🐴",
      title: language === 'en' ? "Carriage Ride" : language === 'fr' ? "Balade en Calèche" : "Kutschfahrt",
      description: language === 'en' ? "Enjoy a scenic carriage ride." : language === 'fr' ? "Profitez d'une balade en calèche pittoresque." : "Genießen Sie eine malerische Kutschfahrt.",
      ageRestriction: language === 'en' ? "No age restriction" : language === 'fr' ? "Aucune restriction d'âge" : "Keine Altersbeschränkung",
      advice: language === 'en' ? "Relax and enjoy the ride." : language === 'fr' ? "Détendez-vous et profitez de la balade." : "Entspannen Sie sich und genießen Sie die Fahrt.",
    },
    {
      icon: "⛴️",
      title: language === 'en' ? "Pirate Boat" : language === 'fr' ? "Bateaux pirates" : "Piratenschiffe",
      description: language === 'en' ? "Enjoy a fun pirate boat experience." : language === 'fr' ? "Profitez d'une expérience de bateau pirate amusante." : "Genießen Sie ein lustiges Piratenschifferlebnis.",
      ageRestriction: language === 'en' ? "No age restriction" : language === 'fr' ? "Aucune restriction d'âge" : "Keine Altersbeschränkung",
      advice: language === 'en' ? "Have fun and enjoy the show." : language === 'fr' ? "Amusez-vous et profitez du spectacle." : "Viel Spaß und genießen Sie die Show.",
    },
    {
      icon: "🌴",
      title: language === 'en' ? "Island Tour" : language === 'fr' ? "Tour de l'île" : "Inselrundfahrt",
      description: language === 'en' ? "Explore the beauty of the island." : language === 'fr' ? "Explorez la beauté de l'île." : "Erkunden Sie die Schönheit der Insel.",
      ageRestriction: language === 'en' ? "No age restriction" : language === 'fr' ? "Aucune restriction d'âge" : "Keine Altersbeschränkung",
      advice: language === 'en' ? "Wear comfortable shoes and carry water." : language === 'fr' ? "Portez des chaussures confortables et apportez de l'eau." : "Tragen Sie bequeme Schuhe und nehmen Sie Wasser mit.",
    },
    {
      icon: "🗺️",
      title: language === 'en' ? "Desert Excursions" : language === 'fr' ? "Excursions de désert" : "Wüstenausflüge",
      description: language === 'en' ? "Experience the desert's beauty." : language === 'fr' ? "Découvrez la beauté du désert." : "Erleben Sie die Schönheit der Wüste.",
      ageRestriction: language === 'en' ? "Minimum age: 10 years" : language === 'fr' ? "Âge minimum : 10 ans" : "Mindestalter: 10 Jahre",
      advice: language === 'en' ? "Stay hydrated and wear a hat." : language === 'fr' ? "Restez hydraté et portez un chapeau." : "Bleiben Sie hydratisiert und tragen Sie einen Hut.",
    },
    {
      icon: "🚗",
      title: language === 'en' ? "Car with Driver" : language === 'fr' ? "Location avec chauffeur" : "Auto mit Fahrer",
      description: language === 'en' ? "Enjoy a comfortable ride with a driver." : language === 'fr' ? "Profitez d'un trajet confortable avec un chauffeur." : "Genießen Sie eine bequeme Fahrt mit einem Fahrer.",
      ageRestriction: language === 'en' ? "No age restriction" : language === 'fr' ? "Aucune restriction d'âge" : "Keine Altersbeschränkung",
      advice: language === 'en' ? "Sit back and relax." : language === 'fr' ? "Asseyez-vous et détendez-vous." : "Lehnen Sie sich zurück und entspannen Sie sich.",
    },
    {
      icon: "✈️",
      title: language === 'en' ? "Airport Transfer" : language === 'fr' ? "Transfert à l'aéroport" : "Flughafentransfer",
      description: language === 'en' ? "Convenient airport transfer service." : language === 'fr' ? "Service de transfert à l'aéroport pratique." : "Praktischer Flughafentransfer-Service.",
      ageRestriction: language === 'en' ? "No age restriction" : language === 'fr' ? "Aucune restriction d'âge" : "Keine Altersbeschränkung",
      advice: language === 'en' ? "Ensure your flight details are correct." : language === 'fr' ? "Assurez-vous que les détails de votre vol sont corrects." : "Stellen Sie sicher, dass Ihre Flugdaten korrekt sind.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleExploreMore = () => {
    if (aboutCompanyRef.current) {
      aboutCompanyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMakeAccount = () => {
    navigate('/create-account');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="relative w-full bg-gray-900 text-white">
        <Navbar language={language} setLanguage={setLanguage} transparent />
        <div className="relative flex items-center justify-center w-full h-96 mt-16">
          <button onClick={prevSlide} className="absolute left-10 md:left-1 p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none z-10 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex flex-col md:flex-row items-center justify-between w-full px-10 transition duration-500">
            <div className="md:w-1/2 text-center md:text-left md:pl-10">
              <h1 className="text-6xl font-bold text-white">{slides[currentSlide].title}</h1>
              <p className="mt-4 text-gray-400">{slides[currentSlide].description}</p>
              <button onClick={handleExploreMore} className="mt-6 bg-green-500 px-6 py-3 rounded-full transition duration-300 hover:bg-green-600 text-white">{language === 'en' ? 'Explore More' : language === 'fr' ? 'En savoir plus' : 'Mehr erfahren'}</button>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
              {slides[currentSlide].type === 'video' ? (
                <video src={slides[currentSlide].image} autoPlay loop muted className="md:right-10 rounded-lg h-96 w-full object-cover transition duration-700"></video>
              ) : (
                <img src={slides[currentSlide].image} alt="Adventure" className="md:right-10 rounded-lg h-96 w-full object-cover transition duration-700" />
              )}
            </div>
          </div>
          <button onClick={nextSlide} className="absolute right-10 md:right-1 p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none z-10 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full bg-white text-black p-10" ref={aboutCompanyRef}>
        <div className="text-center max-w-4xl mx-auto p-10 rounded-lg shadow-lg">
          <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full">{language === 'en' ? 'About Company' : language === 'fr' ? 'À propos de l\'entreprise' : 'Über das Unternehmen'}</div>
          <h2 className="mt-6 text-4xl font-bold">{language === 'en' ? 'Discover Djerba with Us' : language === 'fr' ? 'Découvrez Djerba avec nous' : 'Entdecken Sie Djerba mit uns'}</h2>
          <p className="mt-4 text-gray-600">
            {language === 'en' ? 'We specialize in offering the best travel, rental, and activity options in Djerba. From house and car rentals to exciting activities, we make your stay unforgettable. Our team is dedicated to providing top-notch service and ensuring your experience is seamless and enjoyable.' : language === 'fr' ? 'Nous sommes spécialisés dans l\'offre des meilleures options de voyage, de location et d\'activités à Djerba. De la location de maisons et de voitures aux activités passionnantes, nous rendons votre séjour inoubliable. Notre équipe est dédiée à fournir un service de premier ordre et à garantir que votre expérience soit fluide et agréable.' : 'Wir sind darauf spezialisiert, die besten Reise-, Miet- und Aktivitätsoptionen in Djerba anzubieten. Von Haus- und Autovermietungen bis hin zu aufregenden Aktivitäten machen wir Ihren Aufenthalt unvergesslich. Unser Team ist bestrebt, erstklassigen Service zu bieten und sicherzustellen, dass Ihr Erlebnis reibungslos und angenehm ist.'}
          </p>
        </div>
      </div>
      <div className="w-full bg-white text-black p-10">
        <div className="text-center max-w-4xl mx-auto p-10">
          <h2 className="text-4xl font-bold">{language === 'en' ? 'Amazing Adventure Camping Services for Enjoyed' : language === 'fr' ? 'Services de camping d\'aventure incroyables pour apprécié' : 'Erstaunliche Abenteuer-Campingdienste zum Genießen'}</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {campingOptions.map((option, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-2xl cursor-pointer" onClick={() => handleNavigate(option.path)}>
                <img src={option.image} alt={option.title} className="w-full h-48 object-cover transition duration-300" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                  <p className="mt-2 text-gray-600">{option.description}</p>
                  <div className="mt-4 flex space-x-2">
                    {option.icons.map((icon, i) => (
                      <span key={i} className="text-lg">{icon}</span>
                    ))}
                  </div>
                  <button className="mt-4 flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white transition duration-300 hover:bg-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-black p-10">
        <div className="text-center max-w-4xl mx-auto p-10">
          <h2 className="text-4xl font-bold">{language === 'en' ? 'Our Activities' : language === 'fr' ? 'Nos Activités' : 'Unsere Aktivitäten'}</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center transition duration-300 hover:shadow-2xl">
                <div className="flex justify-center items-center bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <p className="mt-2 text-red-600">{service.ageRestriction}</p>
                <p className="mt-2 text-blue-600">{service.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full relative h-screen">
        <video 
          src="/assets/djerba.mp4" 
          controls 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover"
          ref={videoRef}
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-10">
          <h2 className="text-4xl font-bold mb-4">
            {language === 'en' ? 'Choose to make your vacation more fun and easy' : language === 'fr' ? 'Choisissez de rendre vos vacances plus amusantes et faciles' : 'Wählen Sie, um Ihren Urlaub unterhaltsamer und einfacher zu gestalten'}
          </h2>
          <button onClick={handleMakeAccount} className="bg-green-500 px-6 py-3 rounded-full flex items-center space-x-2 transition duration-300 hover:bg-green-600 mb-4">
            <span>{language === 'en' ? 'Make an Account' : language === 'fr' ? 'Créer un compte' : 'Ein Konto erstellen'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <div className="h-96">
            <LocationMap />
          </div>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
