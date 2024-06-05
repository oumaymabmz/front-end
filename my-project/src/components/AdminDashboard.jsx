import React, { useContext, useState } from 'react';
import { FaCar, FaRunning, FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { ActivityContext } from '../context/ActivityContext';
import AddActivityForm from './AddActivityForm';

const AdminDashboard = () => {
  const { addActivity } = useContext(ActivityContext);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    setSidebarOpen(false); // Close the sidebar when an activity is selected
  };

  const handleFormSubmit = (activityData) => {
    addActivity({ ...activityData, type: selectedActivity });
    setSelectedActivity('');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/assets/vision.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-col">
        {/* Top Bar */}
        <div className="w-full bg-purple-200 bg-opacity-80 h-16 shadow-md flex items-center justify-between px-4">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="text-blue-900 md:hidden">
              {sidebarOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
            <FaHome className="text-2xl font-bold text-blue-900 ml-4" />
            <h1 className="text-2xl font-bold text-blue-900 ml-4">Admin Dashboard</h1>
          </div>
        </div>

        <div className="flex flex-1">
          {/* Sidebar */}
          <div className={`fixed inset-y-0 left-0 bg-purple-200 bg-opacity-80 text-white flex flex-col p-4 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 w-64 shadow-lg backdrop-blur`}>
            <div className="flex items-center justify-between mb-8">
            </div>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleActivitySelect('maison')}
                className="flex items-center bg-blue-700 bg-opacity-70 hover:bg-opacity-90 p-3 rounded-lg transition duration-300 shadow-md"
              >
                <FaHome className="mr-2" />
                Add Maison Info
              </button>
              <button 
                onClick={() => handleActivitySelect('voiture')}
                className="flex items-center bg-blue-700 bg-opacity-70 hover:bg-opacity-90 p-3 rounded-lg transition duration-300 shadow-md"
              >
                <FaCar className="mr-2" />
                Add Voiture Info
              </button>
              <button 
                onClick={() => handleActivitySelect('activite')}
                className="flex items-center bg-green-700 bg-opacity-70 hover:bg-opacity-90 p-3 rounded-lg transition duration-300 shadow-md"
              >
                <FaRunning className="mr-2" />
                Add Activité Info
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className={`flex-1 p-6 transition-transform transform ${sidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
            <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8 bg-opacity-80 backdrop-blur">
              {selectedActivity ? (
                <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-80 backdrop-blur">
                  <AddActivityForm activity={selectedActivity} onSubmit={handleFormSubmit} />
                </div>
              ) : (
                <div className="text-gray-700 text-lg">
                  Select an activity from the sidebar to add information.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
