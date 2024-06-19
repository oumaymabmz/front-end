import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/back.png')" }}>
      <header className="absolute top-0 left-0 w-full z-10 bg-gray-800 bg-opacity-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Djerba Dream Land
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-green-500 transition duration-300 text-white">Home</Link></li>
              <li><Link to="/houses" className="hover:text-green-500 transition duration-300 text-white">House Rental</Link></li>
              <li><Link to="/cars" className="hover:text-green-500 transition duration-300 text-white">Car Rental</Link></li>
              <li><Link to="/activities" className="hover:text-green-500 transition duration-300 text-white">Activities</Link></li>
              <li><Link to="/cart" className="hover:text-green-500 transition duration-300 text-white flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H4M7 13l-2 5a1 1 0 001 1h12a1 1 0 001-1l-2-5M5 21h2M17 21h2M9 21h6" />
                </svg>
                <span>Cart</span>
              </Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-white bg-opacity-70 p-8 rounded shadow-lg max-w-md w-full mt-16 transition duration-500">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded transition duration-300 hover:bg-blue-700">Reset Password</button>
        </form>
        <div className="mt-4">
          <p><Link to="/login" className="text-blue-600">Back to Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
