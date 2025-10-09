/**
 * File: frontend/src/components/Compatibilidad.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-15
 * Last modified: 2025-10-09
 * Description: Component that displays compatibility information for the portal.
 */

function Compatibilidad() {
  return (
    <section className="py-0 bg-light">
      <div className="container">
        <div className="row">
          
          {/* Left column: Title, text, images */}
          <div className="col-12 col-md-8">
            <h6 className="mb-3 text-verde-uaemex title-with-full-line">COMPATIBILIDAD</h6>
            <p className="text-muted small">
              Para un mejor funcionamiento del portal, es recomendable tener tu navegador actualizado con las versiones más recientes.
            </p>

            {/* 5 images in a row gallery */}
            <div className="row g-3 mt-0">
              <div className="col-6 col-md-2">
                <img src="/navegadores/edge.png" alt="Edge" className="img-fluid" style={{ maxWidth: "60px" }} />
              </div>
              <div className="col-6 col-md-2">
                <img src="/navegadores/chrome.png" alt="Chrome" className="img-fluid" style={{ maxWidth: "60px" }} />
              </div>
              <div className="col-6 col-md-2">
                <img src="/navegadores/firefox.png" alt="Firefox" className="img-fluid" style={{ maxWidth: "60px" }} />
              </div>
              <div className="col-6 col-md-2">
                <img src="/navegadores/opera.png" alt="Opera" className="img-fluid" style={{ maxWidth: "60px" }} />
              </div>
              <div className="col-6 col-md-2">
                <img src="/js.png" alt="JavaScript" className="img-fluid" style={{ maxWidth: "60px" }} />
              </div>
            </div>
          </div>

          {/* Right column: Social networks */}
          <div className="col-12 col-md-4 mt-4 mt-md-0 text-center"> 
            <div className="d-flex justify-content-center gap-3 align-items-center">
              <a href="https://twitter.com/@DECyD_UAEM" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/twitter.png" 
                  alt="Twitter" 
                  className="img-fluid"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'contain',
                    transform: 'scale(1.6)',
                    display: 'block',
                    margin: 'auto',
                   }} 
                />
              </a>
              <a href="https://www.instagram.com/decyd2021/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/instagram.png" 
                  alt="Instagram" 
                  className="img-fluid"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'contain'
                  }} 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compatibilidad;
