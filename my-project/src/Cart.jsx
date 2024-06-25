import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.activity) {
      setCartItems((prevItems) => [...prevItems, location.state.activity]);
    }
  }, [location.state, setCartItems]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item, index) => index !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/back.png')" }}>
      <div className="bg-white bg-opacity-70 p-8 rounded shadow-lg max-w-2xl w-full mt-16 transition duration-500">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center mb-2 p-2 border-b">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                  <button onClick={() => handleRemoveItem(index)} className="ml-4 text-red-600 hover:text-red-800">Remove</button>
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
