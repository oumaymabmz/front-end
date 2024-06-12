import React from 'react';

const Dashboard = ({ items }) => (
  <div className="bg-white p-6 mt-6 rounded shadow-md">
    <h2 className="text-2xl font-bold mb-4">Submitted Items</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          {item.imagePreview && (
            <img src={item.imagePreview} alt={item.title} className="w-full h-48 object-cover" />
          )}
          <div className="p-4">
            <div className="flex items-center">
              <span className="text-yellow-500">{"★".repeat(Math.round(item.rating))}</span>
              <span className="ml-2 text-gray-600">({item.rating})</span>
            </div>
            <h3 className="text-xl font-bold mt-2">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <div className="mt-4">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5 10l-5 5 5-5h5l-5-5 5 5h5l-5-5 5 5h5l-5-5z"></path></svg>
                <span>{item.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mt-2">
                <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5 10l-5 5 5-5h5l-5-5 5 5h5l-5-5 5 5h5l-5-5z"></path></svg>
                <span>${item.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
