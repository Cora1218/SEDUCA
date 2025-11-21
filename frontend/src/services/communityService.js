/**
 * File: frontend/src/services/communityService.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-09-25
 * Last modified: 2025-11-04
 * Description: Service for interacting with community-related API endpoints.
 */

import api from "../api"; // Import the API client

// Function for getting all communities
export const getCommunities = async (filters = {}) => {
  try {
    const response = await api.get("/communities", { params: filters }); // -> http://localhost:3000/api/communities
    console.log("Datos recibidos en communityService:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error en communityService:", error);
    throw error;
  }
};
