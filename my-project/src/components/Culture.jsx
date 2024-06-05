import React from 'react';

const Culture = () => {
  const activities = [
    "Visit the art museum",
    "Attend a cultural festival",
    "Explore historical landmarks",
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Cultural Activities</h2>
      <ul className="list-disc list-inside">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Culture;
