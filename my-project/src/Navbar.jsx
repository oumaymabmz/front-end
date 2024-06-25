// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const Navbar = ({ transparent }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className={`fixed top-0 left-0 w-full z-10 ${transparent ? 'bg-transparent' : 'bg-gray-800'} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-8" />
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
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          className="bg-green-500 px-4 py-2 rounded-full transition duration-300 text-white"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;
