import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children, language, setLanguage }) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">Jerba Dream Land</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-green-500 transition duration-300 text-white">Home</Link></li>
              <li><Link to="/houses" className="hover:text-green-500 transition duration-300 text-white">Location Maison</Link></li>
              <li><Link to="/cars" className="hover:text-green-500 transition duration-300 text-white">Location Voiture</Link></li>
              <li><Link to="/activities" className="hover:text-green-500 transition duration-300 text-white">Activities</Link></li>
            </ul>
          </nav>
          <button onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')} className="bg-green-500 px-4 py-2 rounded-full transition duration-300 hover:bg-green-600 text-white">
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      </header>
      <main className="mt-16">{children}</main>
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

export default Layout;
