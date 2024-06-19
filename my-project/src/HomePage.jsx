import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/assets/logo.png';
import Modal from './Modal';
import LocationMap from './LocationMap';

const HomePage = ({ language, setLanguage }) => {
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
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, []);

  const slides = [
    {
      title: language === 'en' ? "Travel to Djerba" : language === 'fr' ? "Voyage à Djerba" : "Reise nach Djerba",
      description: language === 'en' ? "We guide you to find your best option in Djerba." : language === 'fr' ? "Nous vous guidons pour trouver votre meilleure option à Djerba." : "Wir helfen Ihnen, die beste Option in Djerba zu finden.",
      image: "/assets/vacation.gif"
    },
    {
      title: language === 'en' ? "House Rental" : language === 'fr' ? "Location Maison" : "Hausvermietung",
      description: language === 'en' ? "Find the perfect house rental for your stay." : language === 'fr' ? "Trouvez la maison parfaite pour votre séjour." : "Finden Sie die perfekte Hausvermietung für Ihren Aufenthalt.",
      image: "/assets/maison.gif"
    },
    {
      title: language === 'en' ? "Car Rental" : language === 'fr' ? "Location Voiture" : "Autovermietung",
      description: language === 'en' ? "Explore Djerba with our car rental services." : language === 'fr' ? "Explorez Djerba avec nos services de location de voiture." : "Entdecken Sie Djerba mit unseren Autovermietungsdiensten.",
      image: "/assets/voiture.gif"
    },
    {
      title: language === 'en' ? "Activities" : language === 'fr' ? "Activités" : "Aktivitäten",
      description: language === 'en' ? "Enjoy various activities during your stay." : language === 'fr' ? "Profitez de diverses activités pendant votre séjour." : "Genießen Sie verschiedene Aktivitäten während Ihres Aufenthalts.",
      image: "/assets/cheval.gif"
    },
  ];

  const campingOptions = [
    {
      title: language === 'en' ? "Car Rental" : language === 'fr' ? "Location Voiture" : "Autovermietung",
      description: language === 'en' ? "Find the best car rental options for your needs." : language === 'fr' ? "Trouvez les meilleures options de location de voiture pour vos besoins." : "Finden Sie die besten Mietwagenoptionen für Ihre Bedürfnisse.",
      image: "/assets/car.jpg",
      icons: ["🚗", "🔑", "🛣️"],
    },
    {
      title: language === 'en' ? "House Rental" : language === 'fr' ? "Location Maison" : "Hausvermietung",
      description: language === 'en' ? "Discover a variety of house rental options for your stay." : language === 'fr' ? "Découvrez une variété d'options de location de maison pour votre séjour." : "Entdecken Sie eine Vielzahl von Mietoptionen für Ihren Aufenthalt.",
      image: "/assets/maison.png",
      icons: ["🏠", "🔑", "🌆"],
    },
    {
      title: language === 'en' ? "Activities" : language === 'fr' ? "Activités" : "Aktivitäten",
      description: language === 'en' ? "Engage in exciting activities during your trip." : language === 'fr' ? "Participez à des activités passionnantes pendant votre voyage." : "Nehmen Sie an aufregenden Aktivitäten während Ihrer Reise teil.",
      image: "/assets/activite.jpg",
      icons: ["🎉", "🏖️", "🚴"],
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
      icon: "🏄",
      title: language === 'en' ? "Surfing" : language === 'fr' ? "Surf" : "Surfen",
      description: language === 'en' ? "Catch the waves and surf." : language === 'fr' ? "Attrapez les vagues et surfez." : "Fangen Sie die Wellen und surfen Sie.",
      ageRestriction: language === 'en' ? "Minimum age: 14 years" : language === 'fr' ? "Âge minimum : 14 ans" : "Mindestalter: 14 Jahre",
      advice: language === 'en' ? "Use sunscreen and be aware of your surroundings in the water." : language === 'fr' ? "Utilisez de la crème solaire et soyez conscient de votre environnement dans l'eau." : "Verwenden Sie Sonnencreme und achten Sie auf Ihre Umgebung im Wasser.",
    },
    {
      icon: "🏍️",
      title: language === 'en' ? "Quad Ride" : language === 'fr' ? "Balade en Quad" : "Quadfahrt",
      description: language === 'en' ? "Explore the terrain on a quad bike." : language === 'fr' ? "Explorez le terrain en quad." : "Erkunden Sie das Gelände auf einem Quad.",
      ageRestriction: language === 'en' ? "Minimum age: 16 years" : language === 'fr' ? "Âge minimum : 16 ans" : "Mindestalter: 16 Jahre",
      advice: language === 'en' ? "Wear protective gear and drive safely." : language === 'fr' ? "Portez des équipements de protection et conduisez prudemment." : "Tragen Sie Schutzkleidung und fahren Sie vorsichtig.",
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

  return (
    <>
      <div className="relative w-full bg-gray-900 text-white">
        <header className="fixed top-0 left-0 w-full z-10 bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Djerba Dream Land" className="h-8 w-8"/>
              <span className="text-2xl font-bold text-white">Djerba Dream Land</span>
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-green-500 transition duration-300 text-white">{language === 'en' ? 'Home' : language === 'fr' ? 'Accueil' : 'Startseite'}</Link></li>
                <li><Link to="/houses" className="hover:text-green-500 transition duration-300 text-white">{language === 'en' ? 'House Rental' : language === 'fr' ? 'Location Maison' : 'Hausvermietung'}</Link></li>
                <li><Link to="/cars" className="hover:text-green-500 transition duration-300 text-white">{language === 'en' ? 'Car Rental' : language === 'fr' ? 'Location Voiture' : 'Autovermietung'}</Link></li>
                <li><Link to="/activities" className="hover:text-green-500 transition duration-300 text-white">{language === 'en' ? 'Activities' : language === 'fr' ? 'Activités' : 'Aktivitäten'}</Link></li>
                <li><Link to="/cart" className="hover:text-green-500 transition duration-300 text-white flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H4M7 13l-2 5a1 1 0 001 1h12a1 1 0 001-1l-2-5M5 21h2M17 21h2M9 21h6" />
                  </svg>
                  <span>{language === 'en' ? 'Cart' : language === 'fr' ? 'Chariot' : 'Wagen'}</span>
                </Link></li>
              </ul>
            </nav>
            <button onClick={() => setLanguage(language === 'en' ? 'fr' : language === 'fr' ? 'de' : 'en')} className="bg-green-500 px-4 py-2 rounded-full transition duration-300 hover:bg-green-600 text-white">
              {language === 'en' ? 'Français' : language === 'fr' ? 'Deutsch' : 'English'}
            </button>
          </div>
        </header>
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
              <img src={slides[currentSlide].image} alt="Adventure" className="md:right-10 rounded-lg h-96 w-full object-cover transition duration-700" />
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
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-2xl">
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
      <footer className="bg-gray-800 text-white p-10">
        <div className="flex justify-around items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-green-500 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">{language === 'en' ? 'Location' : language === 'fr' ? 'Emplacement' : 'Standort'}</h3>
              <p><button onClick={() => setShowModal(true)} className="text-blue-500">Djerba, Tunisia</button></p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-500 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v-4a4 4 0 10-8 0v4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18a2 2 0 002-2H8a2 2 0 004 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>support@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-500 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h18M3 8h18m-7 4h4l1 5H5l1-5h4m-5 5a2 2 0 01-2-2V4h6v4m0 0h8V4h6v12a2 2 0 01-2 2H5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Hotline</h3>
              <p>+000 (123) 456 898</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.293H9.692V11.12h3.128V8.412c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.796.143v3.243H17.42c-1.529 0-1.826.728-1.826 1.794v2.353h3.653l-.477 3.588h-3.176V24h6.234C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.032.245 2.49.512a4.921 4.921 0 011.725 1.11 4.921 4.921 0 011.11 1.725c.267.458.454 1.284.512 2.49.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.245 2.032-.512 2.49a4.92 4.92 0 01-1.11 1.725 4.921 4.921 0 01-1.725 1.11c-.458.267-1.284.454-2.49.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.032-.245-2.49-.512a4.921 4.921 0 01-1.725-1.11 4.921 4.921 0 01-1.11-1.725c-.267-.458-.454-1.284-.512-2.49-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.206.245-2.032.512-2.49a4.921 4.921 0 011.11-1.725 4.921 4.921 0 011.725-1.11c.458-.267 1.284-.454 2.49-.512 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.344.012 7.047.07 5.668.128 4.568.35 3.674.676a6.837 6.837 0 00-2.421 1.563A6.837 6.837 0 00.676 3.674C.35 4.568.128 5.668.07 7.047.012 8.344 0 8.756 0 12s.012 3.656.07 4.953c.058 1.379.28 2.479.606 3.373a6.837 6.837 0 001.563 2.421 6.837 6.837 0 002.421 1.563c.894.326 1.994.548 3.373.606C8.344 23.988 8.756 24 12 24s3.656-.012 4.953-.07c1.379-.058 2.479-.28 3.373-.606a6.837 6.837 0 002.421-1.563 6.837 6.837 0 001.563-2.421c.326-.894.548-1.994.606-3.373.058-1.297.07-1.709.07-4.953s-.012-3.656-.07-4.953c-.058-1.379-.28-2.479-.606-3.373a6.837 6.837 0 00-1.563-2.421 6.837 6.837 0 00-2.421-1.563c-.894-.326-1.994-.548-3.373-.606C15.656.012 15.244 0 12 0zm0 5.838a6.163 6.163 0 100 12.327 6.163 6.163 0 000-12.327zm0 10.163a3.997 3.997 0 110-7.993 3.997 3.997 0 010 7.993zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.285c-.297-.149-1.757-.867-2.03-.967-.273-.1-.471-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.256-.463-2.39-1.478-.883-.785-1.48-1.753-1.653-2.05-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.074-.148-.669-1.612-.916-2.21-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009s-.52.074-.793.372c-.272.297-1.037 1.014-1.037 2.48 0 1.466 1.061 2.877 1.209 3.074.149.198 2.086 3.186 5.058 4.462.707.305 1.257.487 1.685.624.707.225 1.351.193 1.86.117.567-.084 1.757-.718 2.006-1.411.248-.694.248-1.289.173-1.411-.074-.123-.273-.198-.57-.347zM12.004 0C5.373 0 0 5.373 0 12c0 2.119.557 4.119 1.61 5.88L0 24l6.292-1.648C8.11 23.442 10.023 24 12.004 24c6.63 0 12.004-5.373 12.004-12S18.634 0 12.004 0zM12 21.705c-1.844 0-3.629-.496-5.191-1.432l-.371-.22-3.736.978 1.01-3.641-.243-.373c-.992-1.523-1.52-3.297-1.52-5.086 0-5.148 4.187-9.336 9.335-9.336s9.335 4.187 9.335 9.336c0 5.147-4.188 9.334-9.335 9.334z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
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
