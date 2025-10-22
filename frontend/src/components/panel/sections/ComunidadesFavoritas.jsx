/**
 * File: frontend/src/components/panel/sections/ComunidadesFavoritas.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-10-07
 * Last modified: 2025-10-22
 * Description: Component for displaying favorite communities.
 */

import './ComunidadesFavoritas.css';
import React, { useState, useEffect, useCallback } from "react";
import { getCommunities } from "../../../services/communityService";
import photo from "../../../assets/img/sinfoto.png";
import { useLocation } from "react-router-dom";

const ComunidadesFavoritas = () => {
const [communities, setCommunities] = useState([]); // Here we will store the data from /communities
const [loading, setLoading] = useState(true);

// Pagination
const [currentPage, setCurrentPage] = useState(1); // Current page
const [pageSize, setPageSize] = useState(5); // Initial 5 items per page

// Calculate total number of pages
const totalPages = Math.ceil(communities.length / pageSize);

// location must be declared before any effect that uses it
const location = useLocation();
const isSinglePage = location.pathname === "/panel/comunidades";
const titulo = isSinglePage ? "COMUNIDADES" : "COMUNIDADES FAVORITAS";

// Just apply slice if we are on COMMUNITIES and there are communities
const currentCommunities = (isSinglePage && communities.length > 0)
  ? communities.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  : communities || [];

// Function to fetch communities (can be reused by effects or external events)
const refreshCommunities = useCallback(() => {
  setLoading(true);
  getCommunities()
    .then((data) => {
      setCommunities(data);
      setCurrentPage(1); // <- Reboot the page when refreshing
      setLoading(false); // Data has loaded
    })
    .catch((error) => {
      console.error("Error al obtener comunidades:", error);
      setCommunities([]); // In case of error, we set an empty array
      setLoading(false); // Even if there's an error, we stop loading
    });
}, []);

// 1) Fetch when component mounts or when route becomes /panel/comunidades
useEffect(() => {
  // if (location.pathname === "/panel/comunidades") {
    refreshCommunities(); // always fetch when the component mounts
  // }

// eslint-disable-next-line react-hooks/exhaustive-deps
// }, [location.pathname, refreshCommunities]);
}, [refreshCommunities]);

// 2) Listen for a custom event to force refresh (dispatched from the menu)
useEffect(() => {
  const handler = () => {
    // optional: console.log to help debug
    refreshCommunities(); // always refresh regardless of the route
  };

window.addEventListener("refreshCommunities", handler);

return () => {
    window.removeEventListener("refreshCommunities", handler);
  };
}, [refreshCommunities]);

// This effect does scroll up every time the page changes
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [currentPage]);

return (
  <div className="card border-0 border-success">
    <div
      className="card-header bg-custom-green text-white header-xs"
      style={{
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)"
      }}
    >
      {titulo}
    </div>

    {/* Search bar just for COMUNIDADES */}
    {titulo === "COMUNIDADES" && (
      <div className="p-2 border-bottom d-flex align-items-center">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Buscar comunidad..."
          disabled
        />
        <button className="btn btn-outline-secondary" disabled>
          <i className="bi bi-search"></i>
        </button>
      </div>
    )}

    <div className="comunidades-body border-0 d-flex flex-column align-items-start overflow-auto w-100">
      {loading ? (
        <p className="text-dark fs-6 fs-md-5">Cargando comunidades...</p>
      ) : communities.length === 0 ? (
        <div className="w-100 text-center">
          <p className="text-danger fw-bold text-center fs-6 fs-md-5">
            No tienes comunidades favoritas.
          </p>
        </div>
      ) : (
        currentCommunities.map((community) => (
          <div
            key={community.CveEntAsg}
            className="comunidad-responsive border-bottom pb-2 mb-1 d-flex align-items-center"
          >

            {/* Imagen */}
            <div className="me-3">
              <img
                src={photo}
                alt={`${community.nomCompleto} foto`}
                className="hexagon-img"
                style={{
                  width: "55px",
                  height: "55px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Datos */}
            <div className="flex-grow-1 text-start">
              <div className="fw-bold">
                {community.NomEntAsg} - Grupo {community.NomGpoCom}
              </div>

              {titulo === "COMUNIDADES" && (
                <div className="small">
                  {community.NomEntPln} (Dirección de Educación Continua y Digital)
                </div>
              )}

              <div className="small">
                <span className="fw-bold">Asesor:</span> {community.nomCompleto} / seduca@uaemex.mx
              </div>
              <div className="small">
                <span className="fw-bold">ID:</span> {community.CveEntCom}
              </div>
              <div className="small">
                <span className="fw-bold">Perfil:</span> {community.nPerfil}
              </div>
            </div>
          </div>
        ))
      )}
    {isSinglePage && (
      <>
        {/* Selector of page size */}
        <div className="d-flex flex-wrap justify-content-center align-items-center mt-2 gap-2">
          <label htmlFor="pageSizeSelect" className="small text-muted">
            Mostrar:
          </label>
          <select
            id="pageSizeSelect"
            className="form-select form-select-sm w-auto page-size-select"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1); // reset to the first page when changed
            }}
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span className="page-size-label small text-muted">comunidades por página</span>
        </div>
        
        {/* Show pagination only if there are more pages */}
        {totalPages > 1 && (
          <>
            <nav className="mt-2">
              <ul className="pagination justify-content-center flex-wrap mb-0">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                    Anterior
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                  >
                    <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                      {i + 1}
                    </button>
                  </li>
                ))}

                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                      Siguiente
                    </button>
                  </li>
              </ul>
            </nav>

            {/* Page number text */}
            <div className="text-center mt-2 small text-muted">
              Página {currentPage} de {totalPages}
            </div>
          </>
        )}
      </>
    )}
    </div>
  </div>
);
};
  
export default ComunidadesFavoritas;