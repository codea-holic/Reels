import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contexts from './contextPOCs/Contexts';
import ThemeChanger from './contextPOCs/ThemeChanger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    // <Contexts></Contexts>
    <ThemeChanger></ThemeChanger>
);

