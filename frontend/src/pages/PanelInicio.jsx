/**
 * File: frontend/src/pages/PanelInicio.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-10-12
 * Last modified: 2025-10-12
 * Description: Main component for the initial panel page.
 */

import ComunidadesFavoritas from "../components/panel/sections/ComunidadesFavoritas";
import MisEbooks from "../components/panel/sections/MisEbooks";
import Calendario from "../components/panel/sections/Calendario";
import Avisos from "../components/panel/sections/Avisos";

const PanelInicio = () => {
  return (
    <div className="row g-4">
      <div className="col-12 col-md-9">
        <ComunidadesFavoritas />
        <MisEbooks />
      </div>
      <div className="col-12 col-md-3">
        <Calendario />
        <Avisos />
      </div>
    </div>
  );
};

export default PanelInicio;
