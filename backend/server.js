
/**
 * File: backend/server.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-08-12
 * Last modified: 2025-09-25 
 * Description: This file sets up the Express server, configures middleware, and connects to the MySQL database.
 * It listens on a port defined in the .env file or defaults to 3000.
 */

// Import dependencies
const express = require('express'); // Framework for web server
const cors = require('cors'); // Middleware for enabling CORS
require('dotenv').config(); // Load environment variables from .env file  

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Allows access from other domains (useful for separate frontend)
app.use(express.json()); // For express can read JSON in the body of POST, PUT, etc. requests.

// Test route
// app.get('/', (req, res) => {
//   res.send('Servidor backend funcionando...');
// });

// Import routes
const communityRoutes = require("./src/routes/communityRoutes"); 

// Use routes
app.use("/api/communities", communityRoutes);


// Import the connection to the MySQL database.
const pool = require('./src/config/database');

// Route Get '/api' for testing database connection
app.get('/api', (req, res) => {
  // Simple query to test the connection: Get current date and time from MySQL server.
  pool.query('SELECT NOW() AS now', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ error: 'Error en la consulta' });
    }
    res.json({ message: 'Servidor conectado y DB funcionando.', time: results[0].now });
  });
});

// Port ( Use the one from .env or by default 3000)
const PORT = process.env.PORT || 3000;

//  Start the server on the configured port.
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
