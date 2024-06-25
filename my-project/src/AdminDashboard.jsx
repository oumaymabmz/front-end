import React, { useState } from 'react';

const AdminDashboard = ({ activities, houses, cars, onUpdateItem, onAddItem }) => {
  const [activeTab, setActiveTab] = useState('activities');
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    images: []
  });

  const [adminInfo, setAdminInfo] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    phone: '123-456-7890',
    address: '123 Admin St, Admin City, Admin Country'
  });

  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      adminDashboard: 'Admin Dashboard',
      activities: 'Activities',
      houses: 'Houses',
      cars: 'Cars',
      settings: 'Settings',
      addNew: 'Add New',
      edit: 'Edit',
      title: 'Title',
      description: 'Description',
      location: 'Location',
      price: 'Price',
      images: 'Images',
      save: 'Save',
      add: 'Add',
      noItems: 'No items available.',
      adminSettings: 'Admin Settings',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      adminInfoSaved: 'Admin info saved!',
    },
    fr: {
      adminDashboard: "Tableau de bord de l'administrateur",
      activities: 'Activités',
      houses: 'Maisons',
      cars: 'Voitures',
      settings: 'Paramètres',
      addNew: 'Ajouter un nouveau',
      edit: 'Modifier',
      title: 'Titre',
      description: 'Description',
      location: 'Lieu',
      price: 'Prix',
      images: 'Images',
      save: 'Enregistrer',
      add: 'Ajouter',
      noItems: "Aucun élément disponible.",
      adminSettings: 'Paramètres administrateur',
      name: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      address: 'Adresse',
      adminInfoSaved: 'Informations administrateur enregistrées!',
    },
    de: {
      adminDashboard: 'Admin-Dashboard',
      activities: 'Aktivitäten',
      houses: 'Häuser',
      cars: 'Autos',
      settings: 'Einstellungen',
      addNew: 'Neue hinzufügen',
      edit: 'Bearbeiten',
      title: 'Titel',
      description: 'Beschreibung',
      location: 'Ort',
      price: 'Preis',
      images: 'Bilder',
      save: 'Speichern',
      add: 'Hinzufügen',
      noItems: 'Keine Artikel verfügbar.',
      adminSettings: 'Admin-Einstellungen',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      address: 'Adresse',
      adminInfoSaved: 'Admin-Informationen gespeichert!',
    },
  };

  const t = translations[language];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setEditItem(null);
    setNewItem({ title: '', description: '', price: '', location: '', images: [] });
  };

  const handleEditClick = (item) => {
    setEditItem(item);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editItem) {
      setEditItem({ ...editItem, [name]: value });
    } else if (activeTab === 'settings') {
      setAdminInfo({ ...adminInfo, [name]: value });
    } else {
      setNewItem({ ...newItem, [name]: value });
    }
  };

  const handleSaveClick = () => {
    onUpdateItem(activeTab, editItem);
    setEditItem(null);
  };

  const handleAddClick = () => {
    onAddItem(activeTab, { ...newItem, price: parseFloat(newItem.price) });
    setNewItem({ title: '', description: '', price: '', location: '', images: [] });
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);
    if (editItem) {
      const updatedImages = [...editItem.images];
      updatedImages[index] = fileURL;
      setEditItem({ ...editItem, images: updatedImages });
    } else {
      const updatedImages = [...newItem.images];
      updatedImages[index] = fileURL;
      setNewItem({ ...newItem, images: updatedImages });
    }
  };

  const renderForm = () => (
    <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">{editItem ? t.edit : `${t.addNew} ${t[activeTab.slice(0, -1)]}`}</h3>
      <input
        type="text"
        name="title"
        value={editItem ? editItem.title : newItem.title}
        onChange={handleChange}
        placeholder={t.title}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <textarea
        name="description"
        value={editItem ? editItem.description : newItem.description}
        onChange={handleChange}
        placeholder={t.description}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <input
        type="text"
        name="location"
        value={editItem ? editItem.location : newItem.location}
        onChange={handleChange}
        placeholder={t.location}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <input
        type="number"
        name="price"
        value={editItem ? editItem.price : newItem.price}
        onChange={handleChange}
        placeholder={t.price}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <div>
        <h4 className="font-semibold mb-2">{t.images}</h4>
        {(editItem ? editItem.images : newItem.images).map((image, index) => (
          <div key={index} className="mb-4 flex items-center">
            <img src={image} alt={`${t[activeTab.slice(0, -1)]} ${index}`} className="w-20 h-20 object-cover mr-2 rounded" />
            <input
              type="file"
              onChange={(e) => handleImageChange(e, index)}
              accept="image/*"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
        ))}
        {!editItem && [...Array(3)].map((_, index) => (
          <div key={index} className="mb-4">
            <input
              type="file"
              onChange={(e) => handleImageChange(e, index)}
              accept="image/*"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
        ))}
      </div>
      <button
        onClick={editItem ? handleSaveClick : handleAddClick}
        className={`w-full py-3 mt-4 rounded text-white ${editItem ? 'bg-blue-600' : 'bg-green-600'} hover:${editItem ? 'bg-blue-700' : 'bg-green-700'}`}
      >
        {editItem ? t.save : t.add}
      </button>
    </div>
  );

  const renderSettings = () => (
    <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">{t.adminSettings}</h3>
      <input
        type="text"
        name="name"
        value={adminInfo.name}
        onChange={handleChange}
        placeholder={t.name}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <input
        type="email"
        name="email"
        value={adminInfo.email}
        onChange={handleChange}
        placeholder={t.email}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <input
        type="tel"
        name="phone"
        value={adminInfo.phone}
        onChange={handleChange}
        placeholder={t.phone}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <input
        type="text"
        name="address"
        value={adminInfo.address}
        onChange={handleChange}
        placeholder={t.address}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={() => alert(t.adminInfoSaved)}
        className="w-full py-3 mt-4 rounded text-white bg-blue-600 hover:bg-blue-700"
      >
        {t.save}
      </button>
    </div>
  );

  const renderItems = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.length === 0 ? (
        <p className="text-center text-gray-600">{t.noItems}</p>
      ) : (
        items.map((item) => (
          <div key={item.title} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-gray-600 mb-2">{`${t.location}: ${item.location}`}</p>
            <p className="text-gray-600 mb-4">{`${t.price}: $${item.price}`}</p>
            <button
              onClick={() => handleEditClick(item)}
              className="w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-300"
            >
              {t.edit}
            </button>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{t.adminDashboard}</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
      <div className="mb-8 flex justify-center">
        <button onClick={() => handleTabChange('activities')} className={`px-4 py-2 mx-2 rounded ${activeTab === 'activities' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} hover:${activeTab === 'activities' ? 'bg-blue-700' : 'bg-gray-300'} transition-colors duration-300`}>
          {t.activities}
        </button>
        <button onClick={() => handleTabChange('houses')} className={`px-4 py-2 mx-2 rounded ${activeTab === 'houses' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} hover:${activeTab === 'houses' ? 'bg-blue-700' : 'bg-gray-300'} transition-colors duration-300`}>
          {t.houses}
        </button>
        <button onClick={() => handleTabChange('cars')} className={`px-4 py-2 mx-2 rounded ${activeTab === 'cars' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} hover:${activeTab === 'cars' ? 'bg-blue-700' : 'bg-gray-300'} transition-colors duration-300`}>
          {t.cars}
        </button>
        <button onClick={() => handleTabChange('settings')} className={`px-4 py-2 mx-2 rounded ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} hover:${activeTab === 'settings' ? 'bg-blue-700' : 'bg-gray-300'} transition-colors duration-300`}>
          {t.settings}
        </button>
      </div>
      {activeTab === 'settings' ? renderSettings() : renderForm()}
      {activeTab !== 'settings' && renderItems(activeTab === 'activities' ? activities : activeTab === 'houses' ? houses : cars)}
    </div>
  );
};

export default AdminDashboard;
