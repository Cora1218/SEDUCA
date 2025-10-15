/**
 * File: frontend/src/components/panel/sections/Calendario.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-10-12
 * Last modified: 2025-10-13
 * Description: Calendar component for the panel, displaying important dates and deadlines.
 */

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Calendar styles

const Calendario = ({ date, setDate }) => {
  return (
    <div className="card border-0 border-success calendar-card"> {/* shadow-sm */}
      <div
        className="card-header bg-custom-green text-white header-xs"
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)" }}
      >
        CALENDARIO
      </div>
      <div className="card-body">
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
            <span className="fw-bold text-black">A</span> indica la fecha límite
            para entregar la actividad con base en los siguientes colores:
          </p>
          <p className="mb-1">
            <span className="fw-bold text-success">A</span>: Realizadas en tiempo
          </p>
          <p className="mb-1">
            <span className="fw-bold text-warning">A</span>: Faltan por realizar
          </p>
          <p className="mb-1">
            <span className="fw-bold text-danger">A</span>: Cerradas y que no entregó
          </p>
          <p className="mb-1">
            <span className="fw-bold text-black">A</span>: En las cuales no es estudiante
          </p>
          <p className="mb-0">
            <span className="fw-bold text-secondary">A</span>: Aún no están en tiempo de ser contestadas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calendario;