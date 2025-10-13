/**
 * File: backend/src/config/database.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-08-12
 * Last modified: 2025-10-10
 * Description: Connection pool to MySQL database using mysql2 and environment variables.
 * It reads the database configuration from environment variables defined in the .env file.
 */

const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file 

// Create a connection pool to the MySQL database using environment variables.
const pool = mysql.createPool({
  host: process.env.DB_HOST,      // from .env
  user: process.env.DB_USER,      // from .env
  password: process.env.DB_PASSWORD,  // from .env
  database: process.env.DB_NAME,   // from .env
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.message);
    return;
  }
  console.log('Conectado a la base de datos MySQL (pool)');
  connection.release();
});

module.exports = pool;
