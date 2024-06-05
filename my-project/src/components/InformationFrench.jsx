import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse, faUtensils, faHome } from '@fortawesome/free-solid-svg-icons';

const InformationFrench = ({ onActivityChange }) => {
  return (
    <div id="info" className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Section d'Information</h2>
      <p className="mb-4">C'est ici que vous pouvez mettre des informations sur votre site web ou service. Ajoutez tout contenu que vous pensez pertinent et utile pour vos visiteurs.</p>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Choisir une Activité</label>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => onActivityChange('cheval')} 
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
          >
            <FontAwesomeIcon icon={faHorse} className="mr-2" />
            Cheval
          </button>
          <button 
            onClick={() => onActivityChange('coide')} 
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
          >
            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
            Coide
          </button>
          <button 
            onClick={() => onActivityChange('maison')} 
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Maison
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationFrench;
