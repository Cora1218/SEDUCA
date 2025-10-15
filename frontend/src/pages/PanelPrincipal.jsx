/**
 * File: frontend/src/pages/PanelPrincipal.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-08-05
 * Last modified: 2025-10-15
 * Description: Main component for the main panel page.
 */

import Header from "../components/common/Header";
import Navbar from "../components/panel/Navbar";
import PanelLayout from "../components/PanelLayout";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getBackendMessage } from "../services/backendService";
 
const PanelPrincipal = () => {
  const [backendMessage, setBackendMessage] = useState("");
  
  useEffect(() => {
  const fetchMessage = async () => {
    try {
      const message = await getBackendMessage(); // Use the service function
      setBackendMessage(message);
    } catch (error) {
      console.error("Error al conectar con backend:", error);
      setBackendMessage(""); // If it fails, we leave it empty
    }
  };

  fetchMessage(); // Execute the function when the component mounts
  }, []);

  return (
    <>
      {/* Backend connection message */}
      <p className="text-success text-center mt-2">🔗 {backendMessage}</p>

      {/* Header component */}
      <Header />
      {/* Navbar component */}
      <Navbar />
      {/* Dynamic main content centered and with margins */}
      <PanelLayout>
        <Outlet /> {/* Here, PanelInicio or the individual section is rendered according to the path. */}
      </PanelLayout>
      {/* Gold line before the footer */}
      {/* <div className="gold-line"></div> */}
      <Footer />
    </>
  );
};

export default PanelPrincipal;
