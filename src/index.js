import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "jquery/dist/jquery.min.js"


import "../src/index.css"
import "../src/components/Home/Home.css"
import "../src/components/Portfolio/Portfolio.css"
import "../src/components/Contact/Contact.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
