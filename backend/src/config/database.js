/**
 * File: database.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-08-12
 * Last modified: 2025-08-12
 * Description: This file establishes a connection to the MySQL database using the mysql2 package.
 * It reads the database configuration from environment variables defined in the .env file.
 */

const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // from .env
  user: process.env.DB_USER,      // from .env
  password: process.env.DB_PASSWORD,  // from .env
  database: process.env.DB_NAME   // from .env
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.message);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
