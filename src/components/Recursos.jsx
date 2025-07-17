import realyc_org from '../assets/img/recursos/realyc_org.png';
import hemeroteca_digital from '../assets/img/recursos/hemeroteca_digital.png';
import bibliotega_digital from '../assets/img/recursos/bibliotega_digital.png';
import videoteca_digital from '../assets/img/recursos/videoteca_digital.png';
import secme from '../assets/img/recursos/secme.png';
import publicaciones_line from '../assets/img/recursos/publicaciones_line.png';
import autores from '../assets/img/recursos/autores.png';
import portal_editor from '../assets/img/recursos/portal_editor.png';

/**
 * File: Recursos.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-14
 * Last modified: 2025-07-17
 * Description: Component that displays various digital resources.
 */

function Recursos() {
  return (
    <section className="py-3 bg-light">
      <div className="container">
        <div className="row justify-content-center g-4">

          {/* Recursos en Línea */}
          <div className="col-12 col-md-8">
            <h6 className="mb-3 text-verde-uaemex title-with-full-line">RECURSOS EN LINEA</h6>
            
            {/* 8-image gallery, 4 per row */}
            <div className="row g-3">
                {/* Image 1 */}
                <div className="col-6 col-md-3">
                <a href="http://www.redalyc.org/home.oa" target="_blank" rel="noopener noreferrer">
                    <img src={realyc_org} alt="Redalyc" className="img-fluid rounded shadow-sm" />
                </a>
                </div>
                {/* Image 2 */}
                <div className="col-6 col-md-3">
                <a href="https://hemeroteca.uaemex.mx/" target="_blank" rel="noopener noreferrer">
                    <img src={hemeroteca_digital} alt="Hemeroteca Digital" className="img-fluid rounded shadow-sm" />
                </a>
                </div>
                {/* Image 3 */}
                <div className="col-6 col-md-3">
                <a href="https://bibliotecadigital.uaemex.mx/" target="_blank" rel="noopener noreferrer">
                    <img src={bibliotega_digital} alt="Biblioteca Digital" className="img-fluid rounded shadow-sm" />
                </a>
                </div>
                {/* Image 4 */}
                <div className="col-6 col-md-3">
                <a href="https://campusvirtual.uaemex.mx/videotecadigital/" target="_blank" rel="noopener noreferrer">
                    <img src={videoteca_digital} alt="Videoteca Digital" className="img-fluid rounded shadow-sm" />
                </a>
                </div>

                {/* Image 5 */}
                <div className="col-6 col-md-3">
                <a href="http://ri.uaemex.mx/handle/20.500.11799/32943" target="_blank" rel="noopener noreferrer">
                    <img src={secme} alt="SECME" className="img-fluid rounded shadow-sm" />
                </a>
                </div>
                {/* Image 6 */}
                <div className="col-6 col-md-3">
                <a href="http://ri.uaemex.mx/" target="_blank" rel="noopener noreferrer">
                    <img src={publicaciones_line} alt="Publicaciones en Línea" className="img-fluid rounded shadow-sm" />
                </a>
                </div>
                {/* Image 7 */}
                <div className="col-6 col-md-3">
                <a href="https://autores.redalyc.org/iniciaAutores.oa" target="_blank" rel="noopener noreferrer">
                    <img src={autores} alt="Autores" className="img-fluid rounded shadow-sm" />
                </a>
                </div>
                {/* Image 8 */}
                <div className="col-6 col-md-3">
                <a href="http://blog.conricyt.mx/conoce-el-portal-del-editor/" target="_blank" rel="noopener noreferrer">
                    <img src={portal_editor} alt="Portal del Editor" className="img-fluid rounded shadow-sm" />
                </a>
                </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="col-12 col-md-4">
            <h6 className="mb-3 text-verde-uaemex title-with-full-line">REDES SOCIALES</h6>
            <div className="d-flex justify-content-center">
              {/* <a href="https://www.facebook.com/354421196965?ref=embed_page" target="_blank" rel="noopener noreferrer" className="text-primary" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a> */}
                <div 
                    className="fb-page"
                    data-href="https://www.facebook.com/354421196965?ref=embed_page"
                    data-tabs=""
                    data-width=""
                    data-height="130"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="false"
                >
                    <blockquote
                        cite="https://www.facebook.com/354421196965"
                        className="fb-xfbml-parse-ignore"
                    >
                        <a 
                            href="https://www.facebook.com/354421196965"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="d-flex align-items-center text-decoration-none text-primary"
                        >
                            <i className="bi bi-facebook me-1 fs-4"></i>
                            Facebook
                        </a>
                    </blockquote>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Recursos;
