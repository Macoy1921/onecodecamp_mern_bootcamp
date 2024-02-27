import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// index.js or another entry point
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

