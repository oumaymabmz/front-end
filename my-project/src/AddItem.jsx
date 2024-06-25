import React, { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';

const AddItem = ({ category, activity, onAddItem }) => {
  const [formData, setFormData] = useState({
    title: activity ? activity.title : '',
    description: activity ? activity.description : '',
    price: activity ? activity.price : '',
    location: activity ? activity.location : '',
    category: category,
    image: activity ? activity.image : null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = () => {
      onAddItem({ ...formData, imagePreview: reader.result });
    };
    if (formData.image) {
      reader.readAsDataURL(formData.image);
    } else {
      onAddItem(formData);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {category === 'activity' && (
          <>
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
            <div>
              <label className="block text-gray-700">Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </>
        )}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
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

export default AddItem;
