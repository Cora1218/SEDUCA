/**
 * File: frontend/src/components/common/Footer.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-04
 * Last modified: 2025-10-09
 * Description: Component that displays the footer section of the website.
 */
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="mb-2">
          <img 
            src="/footer-flor-up.png" 
            alt="flor-up" 
            className="img-fluid w-100" 
          />
      </div>
      
      <div className="container">  
        <h6 className="text-center text-verde-uaemex pb-2 fw-bold mt-3">CONTÁCTANOS</h6>
  
        <div className="row gy-4 gx-5 justify-content-between">
          {/* Column 1: Address (left) */}
          <div className="col-12 col-md-3 px-1">
            <p className="mb-1">Universidad Autónoma del Estado de México.</p>
            <p className="text-nowrap">
              <i className="bi bi-geo-alt-fill"></i> 
              Instituto Literario #100. C.P. 50000 Col. Centro.
            </p>
          </div>

          {/* Column 2: Contact by phone (center) */}
          <div className="col-12 col-md-4 px-1 mx-auto">
            <div className="d-flex align-items-center">
              <i className="bi bi-telephone fs-4 text-success me-3"></i>
              <div>
                <p className="mb-1 text-nowrap">
                  <strong>722 276 99 90 ext. 4201 y 4012 - Interior de la República.</strong>
                </p>
                <p className="mb-1">
                  011 52 722 276 99 90 - USA y Canadá.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Contact by email (right) */}
          <div className="col-12 col-md-3 px-1 text-md-end">
            <div className="d-flex align-items-center justify-content-md-end mb-4">
              <i className="bi bi-envelope-fill me-3 fs-4 text-success"></i>
              <a 
                href="mailto:seduca@uaemex.mx"
                className="text-black text-decoration-none"
              >
                seduca@uaemex.mx
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-0">
        <img 
          src="/footer-flor-down.png" 
          alt="flor-down" 
          className="img-fluid w-100" 
        />
      </div>
      <div className="text-center mt-0">
        <img 
          src="/administracion25-29.png" 
          alt="administracion25-29" 
          className="img-fluid" 
          style={{ width: "300px" }} 
        />
      </div>

      {/* Bottom tape */}
      <div className="bg-tape text-white text-center py-2 mt-4">
        <strong>“2025, 195 Años de la Apertura del Instituto Literario en la Ciudad de Toluca”</strong>
      </div>
    </footer>
  );
}

export default Footer;
