/**
 * File: server.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-08-12
 * Last modified: 2025-09-19
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
//   res.send('Servidor backend funcionando 🚀');
// });

// Import the connection to the MySQL database.
const pool = require('./src/config/database');

// Route Get '/' for testing database connection
app.get('/', (req, res) => {
  // Simple query to test the connection: Get current date and time from MySQL server.
  pool.query('SELECT NOW() AS now', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ error: 'Error en la consulta' });
    }
    res.json({ message: 'Servidor conectado y DB funcionando...', time: results[0].now });
  });
});

// Endpoint for gettings fields from TblAsignaturas where CveEntAsg=2758
app.get("/subject", (req, res) => {
  const query = "SELECT * FROM TblAsignaturas WHERE CveEntAsg=-20"; // Example query, change as needed 2758 

  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener asignaturas:", err.message);
      return res.status(500).json({ error: "Error al obtener asignaturas" });
    }
    res.json(results); // returns the list of subjects in JSON format
  });
});


// Port ( Use the one from .env or by default 3000)
const PORT = process.env.PORT || 3000;

//  Start the server on the configured port.
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
