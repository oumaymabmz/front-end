import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-4">
      <img className="w-full h-48 object-cover" src={item.imagePreview || '/placeholder.png'} alt={item.title} />
      <div className="p-4">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">{item.title}</h5>
        <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        <p className="text-sm text-gray-600 mt-2">Location: {item.location}</p>
        <p className="text-sm text-gray-600 mt-2">Price: ${item.price}</p>
        <p className="text-sm text-gray-600 mt-2">Date: {item.date}</p>
        <div className="mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Book Now</button>
        </div>
        <div className="mt-4">
          <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Leave a review"></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
