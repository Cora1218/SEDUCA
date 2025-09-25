/**
 * File: frontend/src/pages/PanelPrincipal.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-08-05
 * Last modified: 2025-09-25
 * Description: Main component for the main panel page.
 */

import PanelLayout from "../components/PanelLayout";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Bell, HelpCircle, Menu, User } from "lucide-react";
import React, { useState, useEffect } from "react";
import { getBackendMessage } from "../services/backendService";
import { getCommunities } from "../services/communityService";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Calendar styles

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


  // State to manage the visibility of the menu
  // const [hasCommunities, setHasCommunities] = useState(true); // Example state, can be modified based on actual data
  const [date, setDate] = useState(new Date()); // Stores the date selected by the calendar
  const hasEbooks = true; // False if there aren't any ebooks
  const hasAnnouncements = true; // False if there aren't any announcements
  const [communities, setCommunities] = useState([]); // Here we will store the data from /communities
  const [loading, setLoading] = useState(true); // State to control loading

  useEffect(() => {
  getCommunities()
    .then((data) => {
      console.log("Communities desde backend:", data); // Here checks if data arrives
      setCommunities(data);
      setLoading(false); // Data has loaded
    })
    .catch((error) => {
      console.error("Error al obtener communities en PanelPrincipal:", error);
      setCommunities([]); // In case of error, we set an empty array
      setLoading(false); // Even if there's an error, we stop loading
    });
  }, []);

  return (
    <>
      {/* Backend connection message */}
      <p className="text-success text-center mt-2">🔗 {backendMessage}</p>

      <Header />
      {/* Top bar with custom icons */}
      <nav className="navbar bg-white shadow sticky-top py-2 px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Scrollable menu */}
          <div
            className="d-flex text-nowrap text-black me-2 nav-left"
            style={{
              // maxWidth: "calc(100% - 120px)",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            <a href="#" className="nav-link px-2">
              INICIO
            </a>
            <>
              <a
                href="#"
                className={`nav-link px-2 ${(!loading && communities.length === 0) ? "disabled text-muted" : ""}`}
                onClick={(e) => (!loading && communities.length === 0) && e.preventDefault()}
                tabIndex={(!loading && communities.length === 0) ? -1 : 0}
                aria-disabled={!loading && communities.length === 0}
              >
                COMUNIDADES
              </a>

              <a
                href="#"
                className={`nav-link px-2 ${(!loading && communities.length === 0) ? "disabled text-muted" : ""}`}
                onClick={(e) => (!loading && communities.length === 0) && e.preventDefault()}
                tabIndex={(!loading && communities.length === 0) ? -1 : 0}
                aria-disabled={!loading && communities.length === 0}
              >
                MIS EBOOKS
              </a>
              <a
                href="#"
                className={`nav-link px-2 ${(!loading && communities.length === 0) ? "disabled text-muted" : ""}`}
                onClick={(e) => (!loading && communities.length === 0) && e.preventDefault()}
                tabIndex={(!loading && communities.length === 0) ? -1 : 0}
                aria-disabled={!loading && communities.length === 0}
              >
                ADMINISTRADOR DE CONTENIDOS
              </a>
              <a
                href="#"
                className={`nav-link px-2 ${(!loading && communities.length === 0) ? "disabled text-muted" : ""}`}
                onClick={(e) => (!loading && communities.length === 0) && e.preventDefault()}
                tabIndex={(!loading && communities.length === 0) ? -1 : 0}
                aria-disabled={!loading && communities.length === 0}
              >
                COORDINACIÓN
              </a>
              <a
                href="#"
                className={`nav-link px-2 ${(!loading && communities.length === 0) ? "disabled text-muted" : ""}`}
                onClick={(e) => (!loading && communities.length === 0) && e.preventDefault()}
                tabIndex={(!loading && communities.length === 0) ? -1 : 0}
                aria-disabled={!loading && communities.length === 0}
              >
                DUDAS TÉCNICAS Y ACADÉMICAS
              </a>
              <a
                href="#"
                className={`nav-link px-2 ${(!loading && communities.length === 0)
                  ? "disabled text-muted" : ""
                }`}
                onClick={(e) => (!loading && communities.length === 0) && e.preventDefault()}
                tabIndex={(!loading && communities.length === 0) ? -1 : 0}
                aria-disabled={!loading && communities.length === 0}
              >
                SERVICIOS ESCOLARES
              </a>
            </>
          </div>

          {/* Icons on the right */}

          <div
            className="d-flex justify-content-end align-items-center nav-icons-right gap-2"
            // style={{ width: "120px" }}
          >
            <button
              className={`btn btn-link ${(!loading && communities.length === 0)
                ? "text-muted disabled" : "text-dark"
              }`}
              onClick={(e) => (!loading && communities.length === 0) && e.preventDefault()}
              tabIndex={(!loading && communities.length === 0) ? -1 : 0}
              aria-disabled={!loading && communities.length === 0}
            >
              <Bell size={20} />
            </button>
            <button
              className={`btn btn-link ${(!loading && communities.length === 0)
                ? "text-muted disabled" : "text-dark"
              }`}
              onClick={(e) => (!loading && communities.length === 0) && e.preventDefault()}
              tabIndex={(!loading && communities.length === 0) ? -1 : 0}
              aria-disabled={!loading && communities.length === 0}
            >
              <HelpCircle size={20} />
            </button>
            <button className="btn btn-link text-dark">
              <User size={20} />
            </button>
            <button
              className={`btn btn-link ${(!loading && communities.length === 0)
                ? "text-muted disabled" : "text-dark"
              }`}
              onClick={(e) => (!loading && communities.length === 0) && e.preventDefault()}
              tabIndex={(!loading && communities.length === 0) ? -1 : 0}
              aria-disabled={!loading && communities.length === 0}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Dynamic main content centered and with margins thanks to Layout */}
      <PanelLayout>
        {/* <section className="my-4"> */}
          {/* <div className="row g-4"> */}

            {/* Community card */}
            <div className="col-12 col-md-9">
              <div className="card shadow-sm border-success mb-3">
                <div
                  className="card-header bg-custom-green text-white header-xs"
                  style={{
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  COMUNIDADES FAVORITAS
                </div>
                <div className="card-body comunidades-body border border-0 border-top-0 d-flex flex-column align-items-start overflow-auto w-100">
                  {loading ? (
                    <p className="text-dark fs-6 fs-md-5">
                      Cargando comunidades...
                    </p>
                  ) : communities.length === 0 ? (
                    <div className="w-100 text-center">
                      <p className="text-danger fw-bold text-center fs-6 fs-md-5">
                        No tienes comunidades favoritas.
                      </p>
                    </div>
                  ) : (
                    communities.map((community) => (
                      <div key={community.CveEntAsg} className="comunidad-responsive text-start">
                        {community.NomEntAsg} {/* Fields from backend */}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* MIS EBOOKS */}
              {hasEbooks && (
                <div className="card shadow-sm border-0 ">
                  <div
                    className="card-header bg-custom-green text-white header-xs"
                    style={{
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    MIS EBOOKS
                  </div>
                  <div className="card-body ebooks-body border border-success border-top-0">
                      <div className="row">
                        {/* Ebook 1 */}
                        <div className="col-md-4 mb-4">
                          <div className="card shadow-sm h-100">
                            <img
                              src="https://via.placeholder.com/300x180"
                              className="card-img-top"
                              alt="Ebook 1"
                            />
                            <div className="card-body d-flex flex-column">
                              <h5 className="card-title">
                                <a href="#ebook1" className="stretched-link text-decoration-none text-dark">Expresión Oral y Escrita</a>
                              </h5>
                              <p className="card-text">
                                Recurso interactivo para mejorar tus habilidades de comunicación.
                              </p>
                              {/* <button className="btn btn-primary mt-auto">
                                Ver Ebook
                              </button> */}
                            </div>
                          </div>
                        </div>

                        {/* Ebook 2 */}
                        <div className="col-md-4 mb-4">
                          <div className="card shadow-sm h-100">
                            <img
                              src="https://via.placeholder.com/300x180"
                              className="card-img-top"
                              alt="Ebook 2"
                            />
                            <div className="card-body d-flex flex-column">
                              <h5 className="card-title">
                                <a href="#ebook2" className="stretched-link text-decoration-none text-dark">Aritmética y Lenguaje Matemático</a>
                              </h5>
                              <p className="card-text">
                                Guía visual para reforzar conceptos de matemáticas básicas.
                              </p>
                              {/* <button className="btn btn-primary mt-auto">
                                Ver Ebook
                              </button> */}
                            </div>
                          </div>
                        </div>

                        {/* Ebook 3 */}
                        <div className="col-md-4 mb-4">
                          <div className="card shadow-sm h-100">
                            <img
                              src="https://via.placeholder.com/300x180"
                              className="card-img-top"
                              alt="Ebook 3"
                            />
                            <div className="card-body d-flex flex-column">
                              <h5 className="card-title">
                                <a href="#ebook3" className="stretched-link text-decoration-none text-dark">Pensamiento Crítico</a>
                              </h5>
                              <p className="card-text">
                                Actividades y lecturas para fortalecer la capacidad de análisis.
                              </p>
                              {/* <button className="btn btn-primary mt-auto">
                                Ver Ebook
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right sidebar with calendar and announcements */}
            <div className="col-12 col-md-3">
              {/* Calendar Card */}
              <div className="card shadow-sm border-0 calendar-card">
                <div
                  className="card-header bg-custom-green text-white header-xs"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)" }}
                >
                  CALENDARIO
                </div>
                <div className="card-body border border-success border-top-0">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    className="react-calendar"
                    locale="es-ES"
                    formatShortWeekday={(locale, date) =>
                      date.toLocaleDateString(locale, { weekday: "narrow" })
                    }
                    formatMonthYear={(locale, date) =>
                      date.toLocaleDateString(locale, { month: "short", year: "numeric" })
                    }
                  />

                  {/* Calendar meaning letters */}
                  <div className="mt-1">
                    <p>
                      <span className="fw-bold text-black">Nota:</span> la letra{" "}
                      <span className="fw-bold text-black">A</span> indica la
                      fecha límite para entregar la actividad con base en los
                      siguientes colores:
                    </p>
                    <p className="mb-1">
                      <span className="fw-bold text-success">A</span>:
                      Realizadas en tiempo
                    </p>
                    <p className="mb-1">
                      <span className="fw-bold text-warning">A</span>: Faltan
                      por realizar
                    </p>
                    <p className="mb-1">
                      <span className="fw-bold text-danger">A</span>: Cerradas y
                      que no entregó
                    </p>
                    <p className="mb-1">
                      <span className="fw-bold text-black">A</span>: En las
                      cuales no es estudiante
                    </p>
                    <p className="mb-0">
                      <span className="fw-bold text-secondary">A</span>: Aún no
                      están en tiempo de ser contestadas
                    </p>
                  </div>
                </div>
              </div>

              {/* Announcement card */}
              {hasAnnouncements && (
                <div className="card shadow-sm border-0 mt-3">
                  <div
                    className="card-header bg-custom-green text-white header-xs"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)" }}
                  >
                    AVISOS
                  </div>
                  <div className="card-body announcements-body border border-success border-top-0">
                      <div className="list-group">
                        <a
                          href="#aviso1"
                          className="list-group-item list-group-item-action"
                        >
                          <strong>Mantenimiento programado:</strong> El sistema estará inactivo el 10 de septiembre.
                        </a>
                        <a
                          href="#aviso2"
                          className="list-group-item list-group-item-action"
                        >
                          <strong>Nuevo recurso:</strong> Ya puedes acceder al curso de Introducción a la Programación.
                        </a>
                      </div>
                  </div>
                </div>
              )}
            </div>
          {/* </div> */}
        {/* </section> */}
      </PanelLayout>

      {/* Gold line before the footer */}
      <div className="gold-line"></div>

      <Footer />
    </>
  );
};

export default PanelPrincipal;
