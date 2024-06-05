import React from 'react';

const Sport = () => {
  const activities = [
    "Join a local soccer game",
    "Go biking",
    "Try water sports",
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Sports Activities</h2>
      <ul className="list-disc list-inside">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sport;
