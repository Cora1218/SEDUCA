/**
 * File: frontend/src/components/PanelLayout.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-08-22
 * Last modified: 2025-08-27
 * Description: Layout for main panel pages with adjustable margins and responsive row
 */

function PanelLayout({ children }) {
  return (
    <div className="panel-container my-4"> {/* Vertical margin */}
      <div className="row g-4"> {/* Row with gap between columns */}
        {children} {/* Here go your col-md-9 and col-md-3 divs */}
      </div>
    </div>
  );
}

export default PanelLayout;
