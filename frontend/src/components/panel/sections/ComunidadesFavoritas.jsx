/**
 * File: frontend/src/components/panel/sections/ComunidadesFavoritas.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-10-07
 * Last modified: 2025-10-30
 * Description: Component for displaying favorite communities.
 */

import './ComunidadesFavoritas.css';
import React, { useState, useEffect, useCallback } from "react";
import { getCommunities } from "../../../services/communityService";
import photo from "../../../assets/img/sinfoto.png";
import { useLocation } from "react-router-dom";

const ComunidadesFavoritas = () => {
const [communities, setCommunities] = useState([]);
const [loading, setLoading] = useState(true);

// Pagination
const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(5);
const totalPages = Math.ceil(communities.length / pageSize);

const location = useLocation();
const isSinglePage = location.pathname === "/panel/comunidades";
const titulo = isSinglePage ? "COMUNIDADES" : "COMUNIDADES FAVORITAS";

const refreshCommunities = useCallback(() => {
  setLoading(true);
  getCommunities()
    .then((data) => {
      setCommunities(data);
      setCurrentPage(1);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error al obtener comunidades:", error);
      setCommunities([]);
      setLoading(false);
    });
}, []);

  useEffect(() => {
    refreshCommunities();
  }, [refreshCommunities]);

  useEffect(() => {
    const handler = () => refreshCommunities();
    window.addEventListener("refreshCommunities", handler);
    return () => window.removeEventListener("refreshCommunities", handler);
  }, [refreshCommunities]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const [filters, setFilters] = useState({});

  const handleCheckboxChange = (field, option, checked) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (checked) {
        updated[field] = [...(updated[field] || []), option];
      } else {
        updated[field] = updated[field].filter((item) => item !== option);
        if (updated[field].length === 0) delete updated[field];
      }
      return updated;
    });
  };

  const clearFilters = () => setFilters({});

  const filteredCommunities = communities.filter((community) =>
    Object.keys(filters).every((field) =>
      filters[field]?.some(
        (value) => String(community[field]).toLowerCase() === String(value).toLowerCase()
      )
    )
  );

  const currentCommunities =
    isSinglePage && communities.length > 0
      ? filteredCommunities.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      : communities || [];

  return (
    <div className="card border-0 border-success">
      <div
        className="card-header bg-custom-green text-white header-xs"
        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
      >
        {titulo}
      </div>

      {titulo === "COMUNIDADES" && (
        <div className="p-2 border-bottom">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <button
              className="btn btn-outline-success btn-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#filterPanel"
              aria-expanded="false"
              aria-controls="filterPanel"
            >
              <i className="bi bi-funnel"></i> Filtros
            </button>
          </div>

          <div className="collapse" id="filterPanel">
            <div className="card card-body border-success">
              <div className="row g-2">
                {[
                  "CveEntAsg",
                  "CveTpoMod",
                  "programa",
                  "bloque",
                  "controlEscolar",
                  "comunidad",
                  "periodo",
                  "grupo",
                  "espacio",
                  "perfil",
                ].map((field) => {
                  const options = [
                    ...new Set(
                      communities.map((c) => c[field]).filter((v) => v !== null && v !== undefined && v !== "")
                    ),
                  ];
                  return (
                    <div className="col-md-6 col-lg-4" key={field}>
                      <label className="form-label text-success fw-bold text-capitalize">{field}</label>
                      <div className="border rounded p-2" style={{ maxHeight: "120px", overflowY: "auto" }}>
                        {options.length > 0 ? (
                          options.map((option) => (
                            <div className="form-check" key={option}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`${field}-${option}`}
                                value={option}
                                checked={filters[field]?.includes(option) || false}
                                onChange={(e) => handleCheckboxChange(field, option, e.target.checked)}
                              />
                              <label className="form-check-label small" htmlFor={`${field}-${option}`}>
                                {option}
                              </label>
                            </div>
                          ))
                        ) : (
                          <small className="text-muted">Sin opciones</small>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-outline-danger btn-sm" onClick={clearFilters}>
                  <i className="bi bi-x-circle"></i> Eliminar filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="comunidades-body border-0 d-flex flex-column align-items-start w-100">
        {loading ? (
          <p className="text-dark fs-6 fs-md-5">Cargando comunidades...</p>
        ) : communities.length === 0 ? (
          <div className="w-100 text-center">
            <p className="text-danger fw-bold fs-6 fs-md-5">No tienes comunidades favoritas.</p>
          </div>
        ) : (
          currentCommunities.map((community) => (
            <div key={community.CveEntAsg} className="comunidad-responsive border-bottom pb-2 mb-1 d-flex align-items-center">
              <div className="me-3">
                <img
                  src={photo}
                  alt={`${community.nomCompleto} foto`}
                  className="hexagon-img"
                  style={{ width: "55px", height: "55px", objectFit: "cover" }}
                />
              </div>
              <div className="flex-grow-1 text-start">
                <div className="fw-bold">{community.NomEntAsg} - Grupo {community.NomGpoCom}</div>
                {titulo === "COMUNIDADES" && (
                  <div className="small">{community.NomEntPln} (Dirección de Educación Continua y Digital)</div>
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

        {/* Pagination Row */}
        {isSinglePage && (
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mt-2">
            {/* Mostrar selector */}
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="pageSizeSelect" className="small text-muted">Mostrar:</label>
              <select
                id="pageSizeSelect"
                className="form-select form-select-sm w-auto page-size-select"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              <span className="small text-muted">comunidades por página</span>
            </div>

            {/* Pagination buttons and page number */}
            {totalPages > 1 && (
              <div className="d-flex align-items-center gap-2">
                <nav>
                  <ul className="pagination mb-0">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <button className="page-link py-1 px-2" onClick={() => setCurrentPage(currentPage - 1)}>Anterior</button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                        <button className="page-link py-1 px-2" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                      <button className="page-link py-1 px-2" onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</button>
                    </li>
                  </ul>
                </nav>
                <span className="small text-muted">Página {currentPage} de {totalPages}</span>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default ComunidadesFavoritas;
