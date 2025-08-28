import PanelLayout from "../components/PanelLayout";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Bell, HelpCircle, Menu, User } from "lucide-react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Calendar styles

/**
 * File: PanelPrincipal.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-08-05
 * Last modified: 2025-08-27
 * Description: Main component for the main panel page.
 */

const PanelPrincipal = () => {
  // State to manage the visibility of the menu
  const [hasCommunities, setHasCommunities] = useState(true); // Example state, can be modified based on actual data
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Header />
      {/* Top bar with custom icons */}
      <nav className="navbar bg-white shadow sticky-top py-3 px-3">
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
                className={`nav-link px-2 ${
                  !hasCommunities ? "disabled text-muted" : ""
                }`}
                onClick={(e) => !hasCommunities && e.preventDefault()}
                tabIndex={hasCommunities ? 0 : -1}
                aria-disabled={!hasCommunities}
              >
                COMUNIDADES
              </a>
              <a
                href="#"
                className={`nav-link px-2 ${
                  !hasCommunities ? "disabled text-muted" : ""
                }`}
                onClick={(e) => !hasCommunities && e.preventDefault()}
                tabIndex={hasCommunities ? 0 : -1}
              >
                MIS EBOOKS
              </a>
              <a
                href="#"
                className={`nav-link px-2 ${
                  !hasCommunities ? "disabled text-muted" : ""
                }`}
                onClick={(e) => !hasCommunities && e.preventDefault()}
                tabIndex={hasCommunities ? 0 : -1}
              >
                ADMINISTRADOR DE CONTENIDOS
              </a>
              <a
                href="#"
                className={`nav-link px-2 ${
                  !hasCommunities ? "disabled text-muted" : ""
                }`}
                onClick={(e) => !hasCommunities && e.preventDefault()}
                tabIndex={hasCommunities ? 0 : -1}
              >
                COORDINACIÓN
              </a>
              <a
                href="#"
                className={`nav-link px-2 ${
                  !hasCommunities ? "disabled text-muted" : ""
                }`}
                onClick={(e) => !hasCommunities && e.preventDefault()}
                tabIndex={hasCommunities ? 0 : -1}
              >
                DUDAS TÉCNICAS Y ACADÉMICAS
              </a>
              <a
                href="#"
                className={`nav-link px-2 ${
                  !hasCommunities ? "disabled text-muted" : ""
                }`}
                onClick={(e) => !hasCommunities && e.preventDefault()}
                tabIndex={hasCommunities ? 0 : -1}
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
              className={`btn btn-link ${
                !hasCommunities ? "text-muted disabled" : "text-dark"
              }`}
              onClick={(e) => !hasCommunities && e.preventDefault()}
              tabIndex={hasCommunities ? 0 : -1}
              aria-disabled={!hasCommunities}
            >
              <Bell size={20} />
            </button>
            <button
              className={`btn btn-link ${
                !hasCommunities ? "text-muted disabled" : "text-dark"
              }`}
              onClick={(e) => !hasCommunities && e.preventDefault()}
              tabIndex={hasCommunities ? 0 : -1}
              aria-disabled={!hasCommunities}
            >
              <HelpCircle size={20} />
            </button>
            <button className="btn btn-link text-dark">
              <User size={20} />
            </button>
            <button
              className={`btn btn-link ${
                !hasCommunities ? "text-muted disabled" : "text-dark"
              }`}
              onClick={(e) => !hasCommunities && e.preventDefault()}
              tabIndex={hasCommunities ? 0 : -1}
              aria-disabled={!hasCommunities}
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
              <div className="card shadow-sm border-0">
                <div
                  className="card-header bg-custom-green text-white header-xs"
                  style={{
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  COMUNIDADES FAVORITAS
                </div>
                <div className="card-body border border-success border-top-0 d-flex flex-column align-items-start overflow-auto w-100">
                  {hasCommunities ? (
                    // <p className="text-dark fs-6 fs-md-5">
                    //   Aquí irán las comunidades...
                    // </p>
                    <>
                      <div className="comunidad-responsive text-start">
                        Comunidad 1
                      </div>
                      <div className="comunidad-responsive text-start">
                        Comunidad 2
                      </div>
                      <div className="comunidad-responsive text-start">
                        Comunidad 3
                      </div>
                      <div className="comunidad-responsive text-start">
                        Comunidad 4
                      </div>
                      <div className="comunidad-responsive text-start">
                        Comunidad 5
                      </div>
                      <div className="comunidad-responsive text-start">
                        Comunidad 6
                      </div>
                    </>
                  ) : (
                    <p className="text-danger text-center fw-bold fs-6 fs-md-5">
                      No tienes comunidades favoritas.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Calendar Card */}
            <div className="col-12 col-md-4 col-lg-3">
              <div className="card shadow-sm border-0 calendar-card">
                <div
                  className="card-header bg-custom-green text-white header-xs"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)" }}
                >
                  CALENDARIO
                </div>
                <div className="card-body border border-success border-top-0 overflow-auto">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    className="react-calendar"
                  />

                  {/* Calendar meaning letters */}
                  <div className="mt-3">
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
            </div>
          {/* </div> */}
        {/* </section> */}
      </PanelLayout>

      <Footer />
    </>
  );
};

export default PanelPrincipal;
