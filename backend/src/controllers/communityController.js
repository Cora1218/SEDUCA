/**
 * File: backend/src/controllers/communityController.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-09-25
 * Last modified: 2025-09-25
 * Description: Controller to handle requests for comunidades.
 */

const communityModel = require("../models/communityModel");

// GET /api/comunidades
const getCommunities = async (req, res) => {
  try {
    const results = await communityModel.findAllCommunities();
    res.json(results); // Send the results to the frontend
  } catch (err) {
    console.error("Error en communityController:", err.message || err);
    res.status(500).json({ error: "Error al obtener comunidades" });
  }
};

module.exports = {
  getCommunities,
};
