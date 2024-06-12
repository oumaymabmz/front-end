import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaCar, FaCalendarAlt, FaCog, FaHouseUser } from 'react-icons/fa';
import AddItem from './AddItem';
import Dashboard from './Dashboard';
import Settings from './Settings';
import HouseList from './HouseList';
import CarList from './CarList';
import ActivityList from './ActivityList';

const AdminDashboard = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">Admin Dashboard</div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-2">
              <Link to="/admin" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <FaHome className="mr-2" /> Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/add-house" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <FaHouseUser className="mr-2" /> Add House
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/add-car" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <FaCar className="mr-2" /> Add Car
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/add-activity" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <FaCalendarAlt className="mr-2" /> Add Activity
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <FaCog className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard items={items} />} />
          <Route path="add-house" element={<AddItem category="house" onAddItem={handleAddItem} />} />
          <Route path="add-car" element={<AddItem category="car" onAddItem={handleAddItem} />} />
          <Route path="add-activity" element={<AddItem category="activity" onAddItem={handleAddItem} />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
