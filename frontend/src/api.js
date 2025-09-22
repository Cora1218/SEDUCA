/**
 * File: src/api.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-09-11
 * Last modified: 2025-09-11
 * Description: API client for interacting with the backend services.
 */

import axios from "axios";

// Axios base configuration
const api = axios.create({
  baseURL: "http://localhost:3000", // your backend
});

export default api;
