import React from 'react';

const ImageSection = ({ selectedActivity }) => {
  let backgroundImage;

  switch (selectedActivity) {
    case 'voiture':
      backgroundImage = "url('/assets/voiture.gif')";
      break;
    case 'activite':
      backgroundImage = "url('/assets/activite.gif')";
      break;
    case 'maison':
      backgroundImage = "url('/assets/maison.gif')";
      break;
    default:
      backgroundImage = "url('/assets/vacation.gif')";
      break;
  }

  return (
    <div 
      className="relative h-screen bg-cover bg-center" 
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Welcome to Djerba</h1>
        <p className="text-lg mb-4">Explore amazing activities and experiences.</p>
      </div>
    </div>
  );
};

export default ImageSection;
