/**
 * File: frontend/src/components/panel/sections/Avisos.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-10-12
 * Last modified: 2025-10-30
 * Description: Component for displaying user's notices.
 */

import "./Avisos.css";

const Avisos = () => {
  return (
    <div className="card border-0 border-success mt-3"> {/* shadow-sm */}
      <div
        className="card-header bg-custom-green text-white header-xs"
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)" }}
      >
        AVISOS
      </div>
      <div className="card-body announcements-body">
        <div className="list-group">
          <a
            href="#aviso1"
            className="list-group-item list-group-item-action border-0"
          >
            <strong>Mantenimiento programado:</strong> El sistema estará inactivo el 10 de septiembre.
          </a>
          <a
            href="#aviso2"
            className="list-group-item list-group-item-action border-0"
          >
            <strong>Nuevo recurso:</strong> Ya puedes acceder al curso de Introducción a la Programación.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Avisos;
