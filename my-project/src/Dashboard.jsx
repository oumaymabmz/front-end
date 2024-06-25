import React from 'react';
import HouseList from './HouseList';
import CarList from './CarList';
import ActivityList from './ActivityList';

const Dashboard = ({ items, onEditItem, onDeleteItem }) => {
  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="space-y-4">
        <HouseList items={items.houses} onEditItem={onEditItem} onDeleteItem={onDeleteItem} />
        <CarList items={items.cars} onEditItem={onEditItem} onDeleteItem={onDeleteItem} />
        <ActivityList items={items.activities} onEditItem={onEditItem} onDeleteItem={onDeleteItem} />
      </div>
    </div>
  );
};

export default Dashboard;
