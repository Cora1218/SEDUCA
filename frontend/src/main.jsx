// Import functions of React and React DOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Icons (to display the icons of Facebook, Twitter, etc.)
import 'bootstrap-icons/font/bootstrap-icons.css';
// JS of Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import custom css
import './index.css'
//  Main app component
import App from './App.jsx' 

/* 
 * File: main.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-04
 * Last modified: 2025-07-17
 * Description: Main entry point for the application
 */

// Connect React to the <div id="root"> of index.html and render the app
// Here the “injection” takes place
// React takes control of the <div id="root"> of the index.html, and places there what the App component returns.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>, 
)
