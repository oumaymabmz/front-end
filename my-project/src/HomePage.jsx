import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [language, setLanguage] = useState('en');

  const slides = [
    {
      title: language === 'en' ? "Travel to Djerba" : "Voyage à Djerba",
      description: language === 'en' ? "We guide you to find your best option in Djerba." : "Nous vous guidons pour trouver votre meilleure option à Djerba.",
      image: "/assets/djerba.jpg"
    },
    {
      title: language === 'en' ? "House Rental" : "Location Maison",
      description: language === 'en' ? "Find the perfect house rental for your stay." : "Trouvez la maison parfaite pour votre séjour.",
      image: "/assets/house.jpg"
    },
    {
      title: language === 'en' ? "Car Rental" : "Location Voiture",
      description: language === 'en' ? "Explore Djerba with our car rental services." : "Explorez Djerba avec nos services de location de voiture.",
      image: "/assets/car.jpg"
    },
    {
      title: language === 'en' ? "Activities" : "Activités",
      description: language === 'en' ? "Enjoy various activities during your stay." : "Profitez de diverses activités pendant votre séjour.",
      image: "/assets/activity.jpg"
    },
  ];

  const campingOptions = [
    {
      title: language === 'en' ? "Car Rental" : "Location Voiture",
      description: language === 'en' ? "Find the best car rental options for your needs." : "Trouvez les meilleures options de location de voiture pour vos besoins.",
      image: "/assets/car.jpg",
      icons: ["🚗", "🔑", "🛣️"],
    },
    {
      title: language === 'en' ? "House Rental" : "Location Maison",
      description: language === 'en' ? "Discover a variety of house rental options for your stay." : "Découvrez une variété d'options de location de maison pour votre séjour.",
      image: "/assets/house.jpg",
      icons: ["🏠", "🔑", "🌆"],
    },
    {
      title: language === 'en' ? "Activities" : "Activités",
      description: language === 'en' ? "Engage in exciting activities during your trip." : "Participez à des activités passionnantes pendant votre voyage.",
      image: "/assets/activity.jpg",
      icons: ["🎉", "🏖️", "🚴"],
    },
  ];

  const services = [
    {
      icon: "🐰",
      title: language === 'en' ? "Best Security" : "Meilleure Sécurité",
      description: language === 'en' ? "We provide top-notch security for your peace of mind." : "Nous fournissons une sécurité de premier ordre pour votre tranquillité d'esprit.",
    },
    {
      icon: "🌐",
      title: language === 'en' ? "Free Internet" : "Internet Gratuit",
      description: language === 'en' ? "Enjoy free internet access during your stay." : "Profitez de l'accès gratuit à Internet pendant votre séjour.",
    },
    {
      icon: "☀️",
      title: language === 'en' ? "Solar Energy" : "Énergie Solaire",
      description: language === 'en' ? "Our facilities are powered by sustainable solar energy." : "Nos installations sont alimentées par une énergie solaire durable.",
    },
    {
      icon: "🚵",
      title: language === 'en' ? "Mountain Biking" : "Vélo de Montagne",
      description: language === 'en' ? "Explore scenic trails with our mountain biking services." : "Explorez des sentiers pittoresques avec nos services de vélo de montagne.",
    },
    {
      icon: "🏊",
      title: language === 'en' ? "Swimming & Fishing" : "Natation & Pêche",
      description: language === 'en' ? "Enjoy swimming and fishing in beautiful locations." : "Profitez de la natation et de la pêche dans de beaux endroits.",
    },
    {
      icon: "🏋️",
      title: language === 'en' ? "GYM and Yoga" : "GYM et Yoga",
      description: language === 'en' ? "Stay fit with our gym and yoga sessions." : "Restez en forme avec nos séances de gym et de yoga.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="relative w-full bg-gray-900 text-white">
        <header className="fixed top-0 left-0 w-full z-10 bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/admin" className="text-2xl font-bold text-white">Jerba Dream Land</Link>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-green-500 transition duration-300 text-white">Home</Link></li>
                <li><Link to="/houses" className="hover:text-green-500 transition duration-300 text-white">Location Maison</Link></li>
                <li><Link to="/cars" className="hover:text-green-500 transition duration-300 text-white">Location Voiture</Link></li>
                <li><Link to="/activities" className="hover:text-green-500 transition duration-300 text-white">Activities</Link></li>
                <li><Link to="/cart" className="hover:text-green-500 transition duration-300 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H4M7 13l-2 5a1 1 0 001 1h12a1 1 0 001-1l-2-5M5 21h2M17 21h2M9 21h6" />
                  </svg>
                </Link></li>
              </ul>
            </nav>
            <button onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')} className="bg-green-500 px-4 py-2 rounded-full transition duration-300 hover:bg-green-600 text-white">
              {language === 'en' ? 'Français' : 'English'}
            </button>
          </div>
        </header>
        <div className="relative flex items-center justify-center w-full h-96 mt-16"> {/* Adjusted height and margin-top */}
          <button onClick={prevSlide} className="absolute left-0 p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none z-10 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex flex-col md:flex-row items-center justify-between w-full px-10 transition duration-500">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-6xl font-bold text-white">{slides[currentSlide].title}</h1>
              <p className="mt-4 text-gray-400">{slides[currentSlide].description}</p>
              <button className="mt-6 bg-green-500 px-6 py-3 rounded-full transition duration-300 hover:bg-green-600 text-white">{language === 'en' ? 'Explore More' : 'En savoir plus'}</button>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
              <img src={slides[currentSlide].image} alt="Adventure" className="rounded-lg transition duration-500" />
            </div>
          </div>
          <button onClick={nextSlide} className="absolute right-0 p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none z-10 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full bg-white text-black p-10">
        <div className="text-center max-w-4xl mx-auto p-10 rounded-lg shadow-lg">
          <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full">{language === 'en' ? 'About Company' : 'À propos de l\'entreprise'}</div>
          <h2 className="mt-6 text-4xl font-bold">{language === 'en' ? 'We Are Most Funning Company About Travel & Tours' : 'Nous sommes l\'entreprise la plus amusante concernant les voyages et les visites'}</h2>
          <p className="mt-4 text-gray-600">
            {language === 'en' ? 'Sit amet consectetur. Velit integer eu tincidunt scelerisque. Sodales volutpat neque fermentum malesuada scelerisque massa lacus. Ultrices eget leo cras odio blandit rhoncus eu. At feugiat condimentum massa integer iaculis sit sit. Sagittis vitae quis sed vitae congue.' : 'Sit amet consectetur. Velit integer eu tincidunt scelerisque. Sodales volutpat neque fermentum malesuada scelerisque massa lacus. Ultrices eget leo cras odio blandit rhoncus eu. At feugiat condimentum massa integer iaculis sit sit. Sagittis vitae quis sed vitae congue.'}
          </p>
        </div>
      </div>
      <div className="w-full bg-white text-black p-10">
        <div className="text-center max-w-4xl mx-auto p-10">
          <h2 className="text-4xl font-bold">{language === 'en' ? 'Amazing Adventure Camping Services for Enjoyed' : 'Services de camping d\'aventure incroyables pour apprécié'}</h2>
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
          <h2 className="text-4xl font-bold">{language === 'en' ? 'Our Activities' : 'Nos Activités'}</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center transition duration-300 hover:shadow-2xl">
                <div className="flex justify-center items-center bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <img src="/assets/activite.gif" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-10">
          <h2 className="text-4xl font-bold mb-4">{language === 'en' ? 'Ready to Travel With Real Adventure and Enjoy Natural' : 'Prêt à voyager avec une véritable aventure et à profiter de la nature'}</h2>
          <button className="bg-green-500 px-6 py-3 rounded-full flex items-center space-x-2 transition duration-300 hover:bg-green-600">
            <span>{language === 'en' ? 'Check Availability' : 'Vérifiez la disponibilité'}</span>
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
              <h3 className="font-semibold">{language === 'en' ? 'Location' : 'Emplacement'}</h3>
              <p>55 Main Street, Australia</p>
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
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2a2 2 0 00-2-2h-8a2 2 0 00-2 2v20a2 2 0 002 2h8a2 2 0 002-2z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7v10M8 7v10" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.92 8.72c-.34 1.69 1.01 3.29 2.87 3.29h.21c.1.33.2.66.31 1.01-.77.52-1.67.87-2.64.87-.86 0-1.66-.19-2.42-.55-1.2-.53-2.14-1.49-2.72-2.65-.7-1.39-.81-2.98-.33-4.51a4.646 4.646 0 015.56-3.16 4.565 4.565 0 012.78 1.66c.15-.06.31-.1.48-.1h.1c1.34-.02 2.44-1.11 2.44-2.46a2.43 2.43 0 00-.46-1.42c.28-.13.59-.2.9-.2 1.24 0 2.27 1.01 2.27 2.26 0 .64-.23 1.23-.64 1.68.1.19.2.39.29.59.63 1.14.75 2.51.34 3.74-.22.68-.61 1.29-1.11 1.8-.56.56-1.26 1.03-2.02 1.4-.38.19-.78.34-1.19.47-.72.24-1.46.39-2.21.46-.01.01-.01.01-.02.01zM12 2.33c-.98 0-1.77.79-1.77 1.76 0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77c0-.97-.79-1.76-1.77-1.76z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v12M8 8v12M12 4v12M12 20v4M4 4v4M4 12v4M4 20v4M20 4v4M20 12v4M20 20v4" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
