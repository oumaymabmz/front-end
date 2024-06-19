import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children, language }) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">Jerba Dream Land</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-green-500 transition duration-300 text-white">{language === 'en' ? 'Home' : 'Accueil'}</Link></li>
              <li><Link to="/houses" className="hover:text-green-500 transition duration-300 text-white">{language === 'en' ? 'House Rental' : 'Location Maison'}</Link></li>
              <li><Link to="/cars" className="hover:text-green-500 transition duration-300 text-white">{language === 'en' ? 'Car Rental' : 'Location Voiture'}</Link></li>
              <li><Link to="/activities" className="hover:text-green-500 transition duration-300 text-white">{language === 'en' ? 'Activities' : 'Activités'}</Link></li>
            </ul>
          </nav>
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
    </>
  );
};

export default Layout;
