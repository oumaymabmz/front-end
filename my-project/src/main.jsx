import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ActivityProvider } from './context/ActivityContext';

ReactDOM.render(
  <React.StrictMode>
    <ActivityProvider>
      <App />
    </ActivityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
