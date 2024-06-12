import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import AdminDashboard from './AdminDashboard';
import HomePage from './HomePage';
import HouseList from './HouseList';
import CarList from './CarList';
import ActivityList from './ActivityList';

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard items={items} />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/houses" element={<HouseList items={items} />} />
        <Route path="/cars" element={<CarList items={items} />} />
        <Route path="/activities" element={<ActivityList items={items} />} />
      </Routes>
    </Router>
  );
};

export default App;
