import React from 'react';
import Layout from './Layout';

const CarList = ({ items, language }) => {
  return (
    <Layout language={language}>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-3">{language === 'en' ? 'Available Houses' : language === 'fr' ? 'Maisons Disponibles' : 'Verfügbare Häuser'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.filter(item => item.category === 'house').map((item, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CarList;
