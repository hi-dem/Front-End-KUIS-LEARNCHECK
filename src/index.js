import React from 'react';
import ReactDOM from 'react-dom/client';  // Menggunakan 'react-dom/client' untuk createRoot
import App from './App';
import './styles/index.css'; // Pastikan CSS diimpor dengan benar

// Pastikan root menggunakan createRoot di React 18
const root = ReactDOM.createRoot(document.getElementById('root'));  // Menggunakan createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
