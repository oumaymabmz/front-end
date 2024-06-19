import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import AdminDashboard from './AdminDashboard';
import HomePage from './HomePage';
import HouseList from './HouseList';
import CarList from './CarList';
import ActivityList from './ActivityList';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Cart from './Cart';
import ForgotPassword from './ForgotPassword';
import LocationMap from './LocationMap';

const App = () => {
  const [items, setItems] = useState([]);
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage language={language} setLanguage={setLanguage} />} />
        <Route path="/admin/*" element={<AdminDashboard items={items} language={language} />} />
        <Route path="/login" element={<Login language={language} />} />
        <Route path="/create-account" element={<CreateAccount language={language} />} />
        <Route path="/houses" element={<HouseList items={items} language={language} />} />
        <Route path="/cars" element={<CarList items={items} language={language} />} />
        <Route path="/activities" element={<ActivityList items={items} language={language} />} />
        <Route path="/cart" element={<Cart language={language} />} />
        <Route path="/forgot-password" element={<ForgotPassword language={language} />} />
        <Route path="/location-map" element={<LocationMap language={language} />} />
      </Routes>
    </Router>
  );
};

export default App;
