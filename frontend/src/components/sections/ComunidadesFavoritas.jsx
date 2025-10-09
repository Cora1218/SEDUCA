/**
 * File: frontend/src/components/sections/ComunidadesFavoritas.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-10-07
 * Last modified: 2025-10-07
 * Description: Component for displaying favorite communities.
 */

import React from "react";
import defaultPhoto  from "../../assets/img/sinfoto.png"; // Default image

const ComunidadesFavoritas = ({ communities = [], loading, photo }) => {
  return (
    <div className="card border-0 border-success">
      <div className="card-header bg-custom-green text-white header-xs">
        COMUNIDADES FAVORITAS
      </div>
      <div className="comunidades-body border-0 d-flex flex-column align-items-start overflow-auto w-100">
        {loading ? (
          <p className="text-dark">Cargando comunidades...</p>
        ) : communities.length === 0 ? (
          <p className="text-danger">No tienes comunidades favoritas.</p>
        ) : (
          communities.map((c) => (
            <div key={c.CveEntAsg} className="comunidad-responsive border-bottom pb-2 mb-1 d-flex align-items-center">
              <div className="me-3">
                <img src={defaultPhoto } alt={c.nomCompleto} style={{ width: "55px", height: "55px", objectFit: "cover" }} />
              </div>
              <div className="flex-grow-1 text-start">
                <div className="fw-bold">{c.NomEntAsg}</div>
                <div className="small"><span className="fw-bold">Asesor:</span> {c.nomCompleto}</div>
                <div className="small"><span className="fw-bold">ID:</span> {c.CveEntCom}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ComunidadesFavoritas;
