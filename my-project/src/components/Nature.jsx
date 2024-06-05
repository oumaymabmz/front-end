import React from 'react';

const Nature = () => {
  const activities = [
    "Go hiking",
    "Visit a national park",
    "Explore botanical gardens",
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Nature Activities</h2>
      <ul className="list-disc list-inside">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Nature;
