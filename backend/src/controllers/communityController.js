/**
 * File: backend/src/controllers/communityController.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-09-25
 * Last modified: 2025-11-10
 * Description: Controller to handle requests for comunidades, including filtering by query params.
 */

const communityModel = require("../models/communityModel");

// GET /api/comunidades
const getCommunities = async (req, res) => {
  try {
    // 1. Receive filters from the URL (example: /api/communities?Tipo=Educativa&Estado=Activo)
    const filters = req.query;
    console.log("Filtros recibidos en backend:", filters);

    // 2. Pass filters to the model
    const results = await communityModel.findAllCommunities(filters);

    // 3. Send results to the frontend
    res.json(results);
  } catch (err) {
    console.error("Error en communityController:", err.message || err);
    res.status(500).json({ error: "Error al obtener comunidades" });
  }
};

module.exports = {
  getCommunities,
};
