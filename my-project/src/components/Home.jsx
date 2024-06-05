import React from 'react';

const Home = ({ onSectionClick }) => {
  return (
    <div className="flex justify-center space-x-4 p-4">
      <div
        className="bg-gray-800 p-4 rounded-lg cursor-pointer text-white"
        onClick={() => onSectionClick('Culture')}
      >
        Culture
      </div>
      <div
        className="bg-gray-800 p-4 rounded-lg cursor-pointer text-white"
        onClick={() => onSectionClick('Food')}
      >
        Food
      </div>
      <div
        className="bg-gray-800 p-4 rounded-lg cursor-pointer text-white"
        onClick={() => onSectionClick('Nature')}
      >
        Nature
      </div>
      <div
        className="bg-gray-800 p-4 rounded-lg cursor-pointer text-white"
        onClick={() => onSectionClick('Sport')}
      >
        Sports
      </div>
    </div>
  );
};

export default Home;
