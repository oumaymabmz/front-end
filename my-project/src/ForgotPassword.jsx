import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const ForgotPassword = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Example API call - replace with your actual API endpoint
    try {
      const response = await fetch('https://your-api-endpoint.com/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage(language === 'en' ? 'Password reset link has been sent to your email.' : language === 'fr' ? 'Le lien de réinitialisation du mot de passe a été envoyé à votre adresse e-mail.' : 'Der Link zum Zurücksetzen des Passworts wurde an Ihre E-Mail-Adresse gesendet.');
        setError('');
      } else {
        setError(language === 'en' ? 'Failed to send password reset link. Please try again.' : language === 'fr' ? 'Échec de l\'envoi du lien de réinitialisation du mot de passe. Veuillez réessayer.' : 'Das Senden des Links zum Zurücksetzen des Passworts ist fehlgeschlagen. Bitte versuchen Sie es erneut.');
        setMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(language === 'en' ? 'Failed to send password reset link. Please try again.' : language === 'fr' ? 'Échec de l\'envoi du lien de réinitialisation du mot de passe. Veuillez réessayer.' : 'Das Senden des Links zum Zurücksetzen des Passworts ist fehlgeschlagen. Bitte versuchen Sie es erneut.');
      setMessage('');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/back.png')" }}>
      <div className="bg-white bg-opacity-70 p-8 rounded shadow-lg max-w-md w-full mt-16 transition duration-500">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Forgot Password' : language === 'fr' ? 'Mot de passe oublié' : 'Passwort vergessen'}
        </h2>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {language === 'en' ? 'Email' : language === 'fr' ? 'Email' : 'E-Mail'}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded transition duration-300 hover:bg-blue-700">
            {language === 'en' ? 'Reset Password' : language === 'fr' ? 'Réinitialiser le mot de passe' : 'Passwort zurücksetzen'}
          </button>
        </form>
        <div className="mt-4">
          <p><Link to="/login" className="text-blue-600">
            {language === 'en' ? 'Back to Login' : language === 'fr' ? 'Retour à la connexion' : 'Zurück zum Login'}
          </Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
