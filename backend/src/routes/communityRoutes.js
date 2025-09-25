/**
 * File: backend/src/routes/communityRoutes.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-09-25
 * Last modified: 2025-09-25
 * Description: Defines routes for community-related operations.
 */

const express = require("express");
const router = express.Router();

// Import the controller
const { getCommunities } = require("../controllers/communityController");

// Routes
router.get("/", getCommunities);

module.exports = router; 
