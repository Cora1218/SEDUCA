/**
 * File: frontend/src/services/backendService.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-09-22
 * Last modified: 2025-09-24
 * Description: Service for interacting with backend API endpoints.
 */

import api from "../api"; // This is the API client

// Function to get the backend message
export const getBackendMessage = async () => {
  try {
    const response = await api.get("/"); // Call your main endpoint -> http://localhost:3000/api/
    return response.data.message; // Return only the message
  } catch (error) {
    console.error("Error fetching backend message:", error);
    throw error; // Throw the error to handle it in the component
  }
};
