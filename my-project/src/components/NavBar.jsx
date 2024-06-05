import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = ({ onLanguageChange }) => {
  return (
    <nav className="bg-gray-100 bg-opacity-40 p-4 fixed w-full z-20 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold italic">Get Your Guide</div>
        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="Search things you want to do..."
            className="p-2 pl-10 w-64 rounded-lg"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="flex space-x-4 items-center">
          <select
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded-lg italic"
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
          </select>
          <Link to="/cart" className="text-white bg-blue-700 p-2 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 flex items-center">
            <FaShoppingCart />
          </Link>
          <Link to="/admin" className="text-white bg-blue-700 p-2 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 italic">
            Admin Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
