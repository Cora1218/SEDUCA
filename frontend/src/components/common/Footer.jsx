/**
 * File: Footer.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-04
 * Last modified: 2025-08-25
 * Description: Component that displays the footer section of the website.
 */

function Footer() {
  return (
    <footer className="bg-footer text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Column 1 */}
          <div className="col-md-3 text-center text-md-start">
            <img
                src="/sello.png"
                alt="Administración Universitaria 2021-2025"
                className="img-fluid"
                style={{ maxWidth: '180px' }}
            />
          </div>

          {/* Column 2: Contact */}
          <div className="col-md-3">
            <h6 className="border-bottom pb-1">Contacto</h6>
            <p className="mb-1 small">Universidad Autónoma del Estado de México</p>
            <p className="mb-1 small pb-4"><i className="bi bi-geo-alt-fill"></i> Instituto Literario #100. C.P. 50000 Col. Centro.</p>
            <p className="mb-1 d-flex align-items-center">
                <i className="bi bi-telephone me-1 text-white"></i>
                <strong>722 226 23 00 - Interior de la República</strong>
            </p>
            <p className="mb-1 small d-flex align-items-center">
                <i className="bi bi-telephone me-1 text-white"></i>
                011 52 722 226 23 00 - USA y Canadá.
            </p>
            <p className="mb-4 small d-flex align-items-center">
                <i className="bi bi-telephone me-1 text-white"></i>
                00 52 722 226 23 00 - Europa y Resto del Mundo.
            </p>
            <p className="mb-4 small"><i className="bi bi-envelope-fill me-1"></i><a href="mailto:rectoria@uaemex.mx" className="text-white text-decoration-none">rectoria@uaemex.mx</a></p>
            <p className="small"><i className="bi bi-box-arrow-up-right me-1"></i><a href="https://www.uaemex.mx/mi-universidad/directorio-telef%C3%B3nico.html" className="text-white text-decoration-none"
               target="_blank" rel="noopener noreferrer">Directorio Telefónico</a></p>

            <h6 className="border-bottom pb-1 mt-5">Contacto SEDUCA</h6>
            <p className="mb-1 small"><i className="bi bi-telephone me-1"></i>722 276 99 90 ext. 4201 y 4012 - Interior de la República.</p>
            <p className="mb-4 small"><i className="bi bi-telephone me-1"></i>011 52 722 276 99 90 - USA y Canadá.</p>
            <p className="mb-4 small"><i className="bi bi-envelope-fill me-1"></i><a href="mailto:seduca@uaemex.mx" className="text-white text-decoration-none">seduca@uaemex.mx</a></p>
          </div>

          {/* Column 3: Links */}
          <div className="col-md-3">
            <h6 className="border-bottom pb-1">Vínculos de Interés</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="http://web.uaemex.mx/avisos/Aviso_Privacidad.pdf" 
                    className="text-white text-decoration-none d-flex align-items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                <i className="bi bi-file-earmark-pdf-fill me-1"></i>
                Aviso de Privacidad
                </a>
              </li>
              <li className="mb-2">
                <a href="http://transparencia.uaemex.mx/" 
                    className="text-white text-decoration-none d-flex align-items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                <i className="bi bi-box-arrow-up-right me-1"></i>
                    Transparencia
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.fundacionuaemex.org/" 
                    className="text-white text-decoration-none d-flex align-items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                <i className="bi bi-box-arrow-up-right me-1"></i>
                    Fundación UAEMéx
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.uaemex.mx/mi-universidad/protocolo-de-seguridad.html" 
                   className="text-white text-decoration-none d-flex align-items-center"
                   target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  Protocolo de Seguridad
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.uaemex.mx/comit%C3%A9-de-%C3%A9tica-de-la-investigaci%C3%B3n.html" 
                   className="text-white text-decoration-none d-flex align-items-center"
                   target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  Comité de Ética de la Investigación
                </a>
              </li>
              <li className="mb-2">
                <a href="https://campusvirtual.uaemex.mx/" 
                   className="text-white text-decoration-none d-flex align-items-center"
                   target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  Campus Virtual
                </a>
              </li>
              <li className="mb-2">
                <a href="http://sgc.uaemex.mx/politica.uaem" 
                   className="text-white text-decoration-none d-flex align-items-center"
                   target="_blank" 
                   rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  Política de Calidad
                </a>
              </li>
            </ul>

            <a
                href="https://vivas.uaemex.mx/"  
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block mt-2"
            >
            <img
                src="/vivas-logo.png"
                alt="Vivas Defensoras Universitarias"
                className="img-fluid"
                style={{ maxWidth: "160px" }}
            />
            </a>

            <h6 className="border-bottom pb-1 mt-3">Otros vínculos</h6>
            <p>
                <a href="http://www.testigossociales.org.mx/TestigosSociales/" 
                   className="text-white text-decoration-none small d-flex align-items-center"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <i className="bi bi-box-arrow-up-right me-1"></i>
                    Testigos Sociales
                </a>
            </p>
            <a
                href="http://web.uaemex.mx/contraloriasocial.html"  
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block mt-2"
            >
            <img
                src="/contraloriasocial.png"
                alt="Vivas Defensoras Universitarias"
                className="img-fluid"
                style={{ maxWidth: "160px" }}
            />
            </a>
          </div>

          {/* Column 4: Media */}
          <div className="col-md-3 text-center text-md-start">
            <h6 className="border-bottom pb-1">Medios y Servicios</h6>
            <div className="d-flex flex-column align-items-center align-items-md-start gap-3">
              <a href="http://uniradio.uaemex.mx/" target="_blank" rel="noopener noreferrer">
                <img src="/UniRadio.png" alt="UniRadio" style={{ maxWidth: '140px' }} />
              </a>
              <a href="https://www.youtube.com/channel/UCe8Se89aeErlTzKnwhFkOtQ/feed" target="_blank" rel="noopener noreferrer">
                <img src="/uaemex_tv.png" alt="UAEMex TV" style={{ maxWidth: '140px' }} />
              </a>
              <a href="https://criterionoticias.wordpress.com/" target="_blank" rel="noopener noreferrer">
                <img src="/LOGO_CRITERIO_web.png" alt="Criterio" style={{ maxWidth: '140px' }} />
              </a>
              <a href="https://appsos.uaemex.mx/sos/" target="_blank" rel="noopener noreferrer">
                <img src="/sos.png" alt="sos" style={{ maxWidth: '140px' }} />
              </a>
              <a href="http://facgeografia.uaemex.mx/LANOT.php" target="_blank" rel="noopener noreferrer">
                <img src="/LANOT.gif" alt="LANOT" style={{ maxWidth: '60px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tape */}
      <div className="bg-tape text-white text-center py-2 mt-4">
        <strong>“2025, 195 Años de la Apertura del Instituto Literario en la Ciudad de Toluca”</strong>
      </div>
    </footer>
  );
}

export default Footer;
