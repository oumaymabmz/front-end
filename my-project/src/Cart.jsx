import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Example items in the cart, you can replace this with your actual cart items
    { id: 1, name: 'House Rental - Beachside Villa', price: 150 },
    { id: 2, name: 'Car Rental - Sedan', price: 50 },
    { id: 3, name: 'Activity - Camel Riding', price: 30 },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
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
      <div className="bg-white bg-opacity-70 p-8 rounded shadow-lg max-w-2xl w-full mt-16 transition duration-500">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="mb-4">
              {cartItems.map(item => (
                <li key={item.id} className="flex justify-between items-center mb-2 p-2 border-b">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                  <button onClick={() => handleRemoveItem(item.id)} className="ml-4 text-red-600 hover:text-red-800">Remove</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center font-bold">
              <span>Total Price:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <button className="w-full bg-green-600 text-white p-2 rounded mt-4 transition duration-300 hover:bg-green-700">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
