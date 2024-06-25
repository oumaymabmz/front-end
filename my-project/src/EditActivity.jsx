import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSave, FaTimes } from 'react-icons/fa';

const EditActivity = ({ activities, onUpdateActivity }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  const activity = activities[index];

  const [formData, setFormData] = useState({
    price: activity.price,
    location: activity.location,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateActivity(index, formData);
    navigate('/admin/activities');
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Activity: {activity.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
            onClick={() => navigate('/admin/activities')}
          >
            <FaTimes className="mr-2" /> Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
          >
            <FaSave className="mr-2" /> Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditActivity;
