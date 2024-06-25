import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import { useLanguage } from './LanguageContext';
import Navbar from './Navbar';

const Login = () => {
  const { language, setLanguage } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleGoogleLogin = (response) => {
    // Handle Google login logic here
    console.log(response);
  };

  const handleFacebookLogin = (response) => {
    // Handle Facebook login logic here
    console.log(response);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/back.png')" }}>
      <Navbar language={language} setLanguage={setLanguage} transparent />
      <div className="bg-white bg-opacity-70 p-8 rounded shadow-lg max-w-md w-full mt-16 transition duration-500">
        <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Login' : language === 'fr' ? 'Connexion' : 'Anmelden'}</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">{language === 'en' ? 'Password' : language === 'fr' ? 'Mot de passe' : 'Passwort'}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
              {language === 'en' ? 'Remember me' : language === 'fr' ? 'Souviens-toi de moi' : 'Erinnere dich an mich'}
            </label>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded transition duration-300 hover:bg-blue-700">{language === 'en' ? 'Login' : language === 'fr' ? 'Connexion' : 'Anmelden'}</button>
        </form>
        <div className="mt-4 flex justify-between">
          <Link to="/forgot-password" className="text-blue-600">{language === 'en' ? 'Forgot Password?' : language === 'fr' ? 'Mot de passe oublié?' : 'Passwort vergessen?'}</Link>
          <Link to="/create-account" className="text-blue-600">{language === 'en' ? 'Register' : language === 'fr' ? 'S\'inscrire' : 'Registrieren'}</Link>
        </div>
        <div className="mt-4 flex flex-col space-y-4">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.log('Login Failed');
            }}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="flex items-center justify-center w-full bg-red-500 text-white p-2 rounded transition duration-300 hover:bg-red-600"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 11.02v2.49h7.06c-.31 1.56-1.56 3.61-3.06 4.48l-.04.27 4.44 3.44.32-.03c1.9-1.73 3.22-4.26 3.22-7.33 0-.82-.08-1.62-.23-2.38H12z" />
                </svg>
                <span>{language === 'en' ? 'Sign in with Google' : language === 'fr' ? 'Se connecter avec Google' : 'Mit Google anmelden'}</span>
              </button>
            )}
          />
          <FacebookLogin
            appId="your-facebook-app-id"
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookLogin}
            icon="fa-facebook"
            cssClass="flex items-center justify-center w-full bg-blue-800 text-white p-2 rounded transition duration-300 hover:bg-blue-900"
            textButton={language === 'en' ? 'Sign in with Facebook' : language === 'fr' ? 'Se connecter avec Facebook' : 'Mit Facebook anmelden'}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
