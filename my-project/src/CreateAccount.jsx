import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import Navbar from './Navbar';

const CreateAccount = () => {
  const { language, setLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, terms } = formData;

    if (password !== confirmPassword) {
      setError(language === 'en' ? 'Passwords do not match' : language === 'fr' ? 'Les mots de passe ne correspondent pas' : 'Passwörter stimmen nicht überein');
      return;
    }

    if (!terms) {
      setError(language === 'en' ? 'You must agree to the terms and conditions' : language === 'fr' ? 'Vous devez accepter les termes et conditions' : 'Sie müssen den Allgemeinen Geschäftsbedingungen zustimmen');
      return;
    }

    // Replace this with your actual API endpoint
    try {
      const response = await fetch('https://your-api-endpoint.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      if (response.ok) {
        // Assuming the API returns a success message or token
        const data = await response.json();
        // Store token or handle successful account creation
        navigate('/login');
      } else {
        setError(language === 'en' ? 'Failed to create account. Please try again.' : language === 'fr' ? 'Échec de la création du compte. Veuillez réessayer.' : 'Konto konnte nicht erstellt werden. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(language === 'en' ? 'Failed to create account. Please try again.' : language === 'fr' ? 'Échec de la création du compte. Veuillez réessayer.' : 'Konto konnte nicht erstellt werden. Bitte versuchen Sie es erneut.');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/back.png')" }}>
      <Navbar language={language} setLanguage={setLanguage} transparent />
      <div className="bg-white bg-opacity-70 p-8 rounded shadow-lg max-w-md w-full mt-16 transition duration-500">
        <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Registration' : language === 'fr' ? 'Inscription' : 'Registrierung'}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">{language === 'en' ? 'Username' : language === 'fr' ? 'Nom d\'utilisateur' : 'Benutzername'}</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">{language === 'en' ? 'Password' : language === 'fr' ? 'Mot de passe' : 'Passwort'}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">{language === 'en' ? 'Confirm Password' : language === 'fr' ? 'Confirmez le mot de passe' : 'Passwort bestätigen'}</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              {language === 'en' ? 'I agree to the terms & conditions' : language === 'fr' ? 'J\'accepte les termes et conditions' : 'Ich stimme den Allgemeinen Geschäftsbedingungen zu'}
            </label>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded transition duration-300 hover:bg-blue-700">{language === 'en' ? 'Register' : language === 'fr' ? 'S\'inscrire' : 'Registrieren'}</button>
        </form>
        <div className="mt-4">
          <p>{language === 'en' ? 'Already have an account?' : language === 'fr' ? 'Vous avez déjà un compte?' : 'Sie haben bereits ein Konto?'} <Link to="/login" className="text-blue-600">{language === 'en' ? 'Login' : language === 'fr' ? 'Connexion' : 'Anmelden'}</Link></p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
