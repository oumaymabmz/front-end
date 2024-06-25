import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import AdminDashboard from './AdminDashboard';
import HomePage from './HomePage';
import ActivityList from './ActivityList';
import HouseList from './HouseList';
import CarList from './CarList';
import Cart from './Cart';
import Navbar from './Navbar';
import Footer from './Footer';
import CreateAccount from './CreateAccount';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import { LanguageProvider } from './LanguageContext';

const staticActivities = [
  { title: 'Quad', description: 'Exciting quad biking experience', price: 100, location: 'Desert', images: ['/assets/quad1.png', '/assets/quad2.png', '/assets/quad3.png'] },
  { title: 'Buggy', description: 'Thrilling buggy rides', price: 150, location: 'Desert', images: ['/assets/buggy1.png', '/assets/buggy2.png', '/assets/buggy3.png'] },
  { title: 'Calèche', description: 'Horse-drawn carriage rides', price: 50, location: 'City', images: ['/assets/Calèche1.png', '/assets/Calèche2.png', '/assets/Calèche3.png'] },
  { title: 'Cheval', description: 'Horse riding', price: 80, location: 'Beach', images: ['/assets/cheval1.png', '/assets/cheval2.png', '/assets/cheval3.png'] },
  { title: 'Dromadaire', description: 'Camel rides', price: 60, location: 'Desert', images: ['/assets/dromadaire1.png', '/assets/dromadaire2.png', '/assets/dromadaire3.png'] },
  { title: 'Jet ski', description: 'Jet ski adventure', price: 200, location: 'Sea', images: ['/assets/jetski1.png', '/assets/jetski2.png', '/assets/jetski3.png'] },
  { title: 'Parachute', description: 'Parachuting', price: 300, location: 'Sky', images: ['/assets/parachute1.png', '/assets/parachute2.png', '/assets/parachute3.png'] },
  { title: 'Bateaux pirates', description: 'Pirate ship tours', price: 120, location: 'Sea', images: ['/assets/bateaux_pirates1.png', '/assets/bateaux_pirates2.png', '/assets/bateaux_pirates3.png'] },
  { title: "Tour de l'île", description: 'Island tour', price: 180, location: 'Island', images: ['/assets/tour_ile1.png', '/assets/tour_ile2.png', '/assets/tour_ile3.png'] },
  { title: 'Excursions de désert tataouine+chneni/ksar ghilane+matmata', description: 'Desert excursions', price: 400, location: 'Desert', images: ['/assets/desert_excursion1.png', '/assets/desert_excursion2.png', '/assets/desert_excursion3.png'] },
  { title: 'Location avec chauffeur', description: 'Car rental with driver', price: 250, location: 'City', images: ['/assets/location_chauffeur1.png'] },
  { title: "Transfert à l'aéroport", description: 'Airport transfer', price: 100, location: 'Airport', images: ['/assets/airport_transfer1.png'] }
];

const App = () => {
  const [activities, setActivities] = useState(staticActivities);
  const [houses, setHouses] = useState([]);
  const [cars, setCars] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [bookedItems, setBookedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleUpdateItem = (type, updatedItem) => {
    switch (type) {
      case 'activities':
        setActivities((prevActivities) =>
          prevActivities.map((activity) =>
            activity.title === updatedItem.title ? updatedItem : activity
          )
        );
        break;
      case 'houses':
        setHouses((prevHouses) =>
          prevHouses.map((house) =>
            house.title === updatedItem.title ? updatedItem : house
          )
        );
        break;
      case 'cars':
        setCars((prevCars) =>
          prevCars.map((car) =>
            car.title === updatedItem.title ? updatedItem : car
          )
        );
        break;
      default:
        break;
    }
  };

  const handleAddItem = (type, newItem) => {
    switch (type) {
      case 'activities':
        setActivities([...activities, newItem]);
        break;
      case 'houses':
        setHouses([...houses, newItem]);
        break;
      case 'cars':
        setCars([...cars, newItem]);
        break;
      default:
        break;
    }
  };

  const handleAddReview = (type, itemTitle, reviewText, rating) => {
    const newReview = {
      type,
      itemTitle,
      reviewText,
      rating,
      reviewer: 'John Doe' // Replace this with the actual logged-in user name
    };
    setReviews([...reviews, newReview]);
  };

  const handleAddToCart = (type, item) => {
    setCartItems([...cartItems, item]);
    setBookedItems([...bookedItems, { type, itemTitle: item.title }]);
  };

  return (
    <GoogleOAuthProvider clientId="your-google-client-id">
      <LanguageProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/admin"
                element={
                  <AdminDashboard
                    activities={activities}
                    houses={houses}
                    cars={cars}
                    onUpdateItem={handleUpdateItem}
                    onAddItem={handleAddItem}
                  />
                }
              />
              <Route
                path="/activities"
                element={<ActivityList activities={activities} reviews={reviews} onAddReview={handleAddReview} bookedItems={bookedItems} onAddToCart={handleAddToCart} />}
              />
              <Route
                path="/houses"
                element={<HouseList houses={houses} reviews={reviews} onAddReview={handleAddReview} bookedItems={bookedItems} onAddToCart={handleAddToCart} />}
              />
              <Route
                path="/cars"
                element={<CarList cars={cars} reviews={reviews} onAddReview={handleAddReview} bookedItems={bookedItems} onAddToCart={handleAddToCart} />}
              />
              <Route
                path="/cart"
                element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
              />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
