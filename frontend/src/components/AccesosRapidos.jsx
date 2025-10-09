/**
 * File: AccesosRapidos.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-11
 * Last modified: 2025-10-09
 * Description: Component that displays quick access cards to different services and resources.
 */
import './AccesosRapidos.css';

function AccesosRapidos() {
  return (
    <section className="py-0 bg-white">

      {/* 
       */}  
      <div className="container">
        <div className="row g-4 justify-content-center">
          
          {/* School Services */}
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center" style={{ minHeight: "261px" }}>
                <h6 className="card-title text-center text-verde-uaemex mb-2 title-with-line">SERVICIOS ESCOLARES</h6>
                <ul className="custom-list list-unstyled text-start px-3">
                    <li><a href="https://sibecas.uaemex.mx/" target="_blank" rel="noopener noreferrer" className="custom-link"> Becas</a></li>
                    <li><a href="https://controlescolar.uaemex.mx/" target="_blank" rel="noopener noreferrer" className="custom-link"> Control Escolar</a></li>
                    <li><a href="https://oag.uaemex.mx/" target="_blank" rel="noopener noreferrer" className="custom-link"> Normatividades</a></li>
                    <li><a href="https://sev.uaemex.mx/index.php" target="_blank" rel="noopener noreferrer" className="custom-link"> Servicios Universitarios</a></li>
                    <li><a href="https://defensoria.uaemex.mx/" target="_blank" rel="noopener noreferrer" className="custom-link"> Defensoría de los Derechos Universitarios</a></li>
                </ul> 
              </div>
            </div>
          </div>

          {/* School Calendar */}
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-verde-uaemex mb-2 text-center title-with-line">CALENDARIO ESCOLAR</h6>
                <a href="http://dep.uaemex.mx/portal/docs/calendario2024_2025.pdf" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/calendario_24-25.png"
                        alt="Calendario Escolar 2024-2025"
                        className="img-fluid w-100 mb-0 d-block"
                        style={{ objectFit: "contain", maxHeight: "200px", borderRadius: "0.375rem", border: "0px solid #dee2e6" }}
                    />
                </a>                
              </div>
            </div>
          </div>

          {/* Virtual Campus */}
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-verde-uaemex mb-2 text-center title-with-line">CAMPUS VIRTUAL</h6>
                <a href="https://campusvirtual.uaemex.mx/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/campus.jpg"
                        alt="Campus Virtual"
                        className="img-fluid w-100 mb-0 d-block"
                        style={{ objectFit: "contain", maxHeight: "200px", borderRadius: "0.375rem", border: "0px solid #dee2e6" }}
                    />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccesosRapidos;
