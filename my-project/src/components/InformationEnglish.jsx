import React, { useContext, useState } from 'react';
import { ActivityContext } from '../context/ActivityContext';
import { FaHome, FaCar, FaRunning } from 'react-icons/fa';

const InformationEnglish = ({ onActivityChange, selectedActivity }) => {
  const { activities } = useContext(ActivityContext);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const renderDefaultInformation = () => (
    <div className="mt-8 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-8 rounded-lg shadow-xl text-left">
      <h3 className="text-4xl font-bold mb-6 text-blue-900">Welcome to Your Guide</h3>
      <p className="mb-6 text-lg text-gray-800 leading-relaxed">
        We are here to help you find the best occupation. Whether you need a car, a house, or activities to do during your stay, we provide all the necessary information to make your experience enjoyable.
      </p>
      <p className="mb-4 text-xl font-semibold text-gray-800">Our services include:</p>
      <ul className="list-disc list-inside mb-6 text-lg text-gray-800 space-y-2">
        <li><strong>Car Rentals:</strong> Find the best deals on car rentals to explore the city at your own pace. Note that a valid driver's license is required.</li>
        <li><strong>House Rentals:</strong> Discover comfortable and affordable house rentals for your stay. Be sure to check the house rules and pet policies.</li>
        <li><strong>Activities:</strong> Engage in various activities such as horse riding (not recommended for pregnant women), quad biking, parachuting (adults only), and more to make your stay memorable.</li>
      </ul>
      <p className="mb-6 text-lg text-gray-800 leading-relaxed">
        Our dedicated team is always ready to assist you with any inquiries or special requests. We aim to ensure that your stay is pleasant and hassle-free.
      </p>
      <p className="mb-6 text-lg text-gray-800 leading-relaxed">
        Feel free to explore the options above to learn more about our services and find what suits your needs best.
      </p>
    </div>
  );

  const renderActivityInformation = () => (
    <div className="mt-8 bg-white bg-opacity-90 p-8 rounded-lg shadow-xl">
      <h3 className="text-3xl font-bold mb-6 text-blue-900">Activities</h3>
      {activities.filter(activity => activity.type === selectedActivity).length === 0 ? (
        <p className="text-lg text-gray-800">No activities available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.filter(activity => activity.type === selectedActivity).map((activity, index) => (
            <div key={index} className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-blue-900">{activity.title}</h4>
              <p className="mb-4 text-lg text-gray-800">{activity.description}</p>
              {activity.image && <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover rounded-lg mb-4" />}
              <button 
                onClick={() => addToCart(activity)} 
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderCartConfirmation = () => (
    <div className="mt-8 bg-white bg-opacity-90 p-8 rounded-lg shadow-xl">
      <h3 className="text-3xl font-bold mb-6 text-blue-900">Confirm Your Choices</h3>
      <ul className="list-disc list-inside mb-6 text-lg text-gray-800 space-y-2">
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - {item.description}
          </li>
        ))}
      </ul>
      <button 
        onClick={() => alert('Your choices have been confirmed.')} 
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        Confirm
      </button>
    </div>
  );

  return (
    <div 
      id="info" 
      className="container mx-auto p-4 text-center bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: "url('/LEMAT_WORKS.gif')" }}
    >
      <div className="relative z-10 mb-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            onClick={() => onActivityChange('maison')} 
            className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg flex items-center w-1/3 justify-center transition duration-300 ease-in-out"
          >
            <FaHome className="mr-2" /> Location Maison
          </button>
          <button 
            onClick={() => onActivityChange('voiture')} 
            className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:from-violet-500 hover:via-violet-600 hover:to-violet-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg flex items-center w-1/3 justify-center transition duration-300 ease-in-out"
          >
            <FaCar className="mr-2" /> Location Voiture
          </button>
          <button 
            onClick={() => onActivityChange('activite')} 
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg flex items-center w-1/3 justify-center transition duration-300 ease-in-out"
          >
            <FaRunning className="mr-2" /> Activité
          </button>
        </div>
      </div>
      <div className="relative z-10">
        {cart.length > 0 ? renderCartConfirmation() : (selectedActivity ? renderActivityInformation() : renderDefaultInformation())}
      </div>
    </div>
  );
};

export default InformationEnglish;
