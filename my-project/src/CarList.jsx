import React from 'react';
import Layout from './Layout';

const CarList = ({ items }) => {
  const [language, setLanguage] = React.useState('en');

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-3">Available cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.filter(item => item.category === 'car').map((item, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.description}</p>
              {/* Additional item details can be displayed here */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CarList;
