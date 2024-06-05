import React from 'react';

const Food = () => {
  const activities = [
    "Try street food",
    "Visit local restaurants",
    "Join a cooking class",
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Food Activities</h2>
      <ul className="list-disc list-inside">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Food;
