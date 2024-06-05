import React, { useState } from 'react';

const AddActivityForm = ({ activity, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, photo });
    setName('');
    setDescription('');
    setPhoto(null);
    setPhotoPreview('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add {activity} Info</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Photo</label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
          />
          {photoPreview && (
            <img src={photoPreview} alt="Preview" className="mt-2 rounded-lg" />
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Add {activity}
        </button>
      </form>
    </div>
  );
};

export default AddActivityForm;
