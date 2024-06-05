import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import ImageSection from './components/ImageSection';
import InformationEnglish from './components/InformationEnglish';
import InformationFrench from './components/InformationFrench';
import InformationSpanish from './components/InformationSpanish';
import InformationGerman from './components/InformationGerman';
import End from './components/End';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Cart from './components/Cart';

const App = () => {
  const [selectedActivity, setSelectedActivity] = useState('default');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleActivityChange = (activity) => {
    setSelectedActivity(activity);
  };

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  let InformationComponent;
  switch (language) {
    case 'French':
      InformationComponent = InformationFrench;
      break;
    case 'Spanish':
      InformationComponent = InformationSpanish;
      break;
    case 'German':
      InformationComponent = InformationGerman;
      break;
    case 'English':
    default:
      InformationComponent = InformationEnglish;
      break;
  }

  return (
    <Router>
      <MainRoutes 
        onLanguageChange={handleLanguageChange} 
        onActivityChange={handleActivityChange} 
        selectedActivity={selectedActivity}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        InformationComponent={InformationComponent}
      />
    </Router>
  );
};

const MainRoutes = ({ 
  onLanguageChange, 
  onActivityChange, 
  selectedActivity, 
  isLoggedIn, 
  onLogin, 
  InformationComponent 
}) => {
  const location = useLocation();
  const showNavBar = location.pathname === '/'; // Show NavBar only on the home page

  return (
    <>
      {showNavBar && <NavBar onLanguageChange={onLanguageChange} />}
      <div className={showNavBar ? '' : 'pt-16'}>
        <Routes>
          <Route path="/admin" element={!isLoggedIn ? <AdminLogin onLogin={onLogin} /> : <AdminDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={
            <div>
              <ImageSection selectedActivity={selectedActivity} />
              <InformationComponent onActivityChange={onActivityChange} />
              <End />
            </div>
          } />
        </Routes>
      </div>
    </>
  );
};

export default App;
