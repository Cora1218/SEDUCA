/**
 * File: frontend/src/components/panel/Navbar.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-10-12
 * Last modified: 2025-10-27
 * Description: Main navigation component for the application, handling all navigation links.
 */

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Bell, HelpCircle, User, Menu } from "lucide-react";

function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("is-stuck");
      } else {
        navbar.classList.remove("is-stuck");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-4">
      <div className="container navbar-container">

        {/* Links of the menu */}
        <div className="collapse navbar-collapse" id="panelNavbar">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-3">
              <NavLink
                to="/panel"
                end
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active fw-bold text-verde-uaemex" : "")
                }
                onClick={() => {
                  // Cleaning the state of Comunidades when navigating to another section
                  window.dispatchEvent(new Event("resetCommunities"));

                  // Force refresh communities data
                  window.dispatchEvent(new Event("refreshCommunities"));
                }}
              >
                INICIO
              </NavLink>
            </li>
            
            <li className="nav-item me-3">
              <NavLink
                to="/panel/comunidades"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active fw-bold text-verde-uaemex" : "")
                }
                onClick={() => {
                  window.dispatchEvent(new Event("refreshCommunities"));
                }}
              >
                COMUNIDADES
              </NavLink>
            </li>

            <li className="nav-item me-3">
              <NavLink
                to="/panel/mis-ebooks"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active fw-bold text-verde-uaemex" : "")
                }
              >
                MIS EBOOKS
              </NavLink>
            </li>

            <li className="nav-item me-3">
                <NavLink
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="nav-link text-verde-uaemex text-center"
                    title="Próximamente"                    
                >
                ADMINISTRADOR <span className="d-block">DE CONTENIDOS</span>
                </NavLink>
            </li>

            <li className="nav-item me-3">
              <NavLink
                to="#"
                onClick={(e) => e.preventDefault()}
                className="nav-link text-verde-uaemex"
                title="Próximamente"
              >
                COORDINACIÓN
              </NavLink>
            </li>

            <li className="nav-item me-3">
              <NavLink
                to="#"
                onClick={(e) => e.preventDefault()}
                className="nav-link text-verde-uaemex text-center"
                title="Próximamente"
              >
                DUDAS TÉCNICAS <span className="d-block">Y ACADÉMICAS</span>
              </NavLink>
            </li>

            <li className="nav-item me-3">
              <NavLink
                to="#"
                onClick={(e) => e.preventDefault()}
                className="nav-link text-verde-uaemex"
                title="Próximamente"
              >
                SERVICIOS ESCOLARES
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right side icons */}
        <div className="d-flex align-items-center ms-auto gap-2 navbar-icons">
        
        {/* Bell icon */}
        <button className="btn btn-link p-1 bell-btn" title="Notificaciones" aria-label="Notificaciones">
            <Bell className="bell-icon" />
        </button>

        {/* Help icon */}
        <button className="btn icon-hex p-1" title="Ayuda" aria-label="Ayuda">
            <HelpCircle className="help-icon" />
        </button>

        {/* User icon */}
        <button className="btn icon-hex p-1" title="Perfil" aria-label="Perfil">
            <User className="user-icon" />
        </button>

        {/* Hamburger button (responsive mode) */}
        <button
          className="navbar-toggler d-flex align-items-center justify-content-center menu-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelNavbar"
          aria-controls="panelNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <Menu size={24} />
        </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
