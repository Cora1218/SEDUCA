/**
 * File: frontend/src/components/panel/sections/MisEbooks.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-10-12
 * Last modified: 2025-10-13
 * Description: Component for displaying user's ebooks.
 */

const MisEbooks = () => {
  const hasEbooks = true; // Then you can pass the ebooks as props

  if (!hasEbooks) return null; // Si no hay ebooks, no renderiza nada

  return (
    <>
      {/* MIS EBOOKS */}
      {hasEbooks && (
        <div className="card border-0 border-success"> {/* shadow-sm */}
          <div
            className="card-header bg-custom-green text-white header-xs mb-2"
            style={{
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
            }}
          >
            MIS EBOOKS
          </div>
          <div className="card-body ebooks-body">
            <div className="row">
              {/* Ebook 1 */}
              <div className="col-12 col-sm-6 col-md-3 mb-4">
                <div className="card shadow-sm h-100 border-0">
                  <img
                    src="/miniatura_eRecursosAmbSocioII.png"
                    className="card-img-top img-fluid"
                    alt="Ebook 1"
                    style={{ width: "160px", height: "208px", objectFit: "cover", margin: "0 auto" }}
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">
                      <a href="#ebook1" className="stretched-link text-decoration-none text-dark fw-bold small">
                        E-book Recursos y Ámbitos Socioemocionales II
                      </a>
                    </h5>
                    <p className="card-text mb-0">Grupo 1</p>
                    <p className="card-text">SD - Dirección de Nivel Medio Superior</p>
                  </div>
                </div>
              </div>

              {/* Ebook 2 */}
              <div className="col-12 col-sm-6 col-md-3 mb-4">
                <div className="card shadow-sm h-100 border-0">
                  <img
                    src="/miniatura_eRecursosAmbSocioII.png"
                    className="card-img-top img-fluid"
                    alt="Ebook 2"
                    style={{ width: "160px", height: "208px", objectFit: "cover", margin: "0 auto" }}
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">
                      <a href="#ebook2" className="stretched-link text-decoration-none text-dark fw-bold small">
                        E-book Recursos y Ámbitos Socioemocionales II
                      </a>
                    </h5>
                    <p className="card-text mb-0">Grupo 2</p>
                    <p className="card-text">SD - Dirección de Nivel Medio Superior</p>
                  </div>
                </div>
              </div>

              {/* Ebook 3 */}
              <div className="col-12 col-sm-6 col-md-3 mb-4">
                <div className="card shadow-sm h-100 border-0">
                  <img
                    src="/miniatura_eRecursosAmbSocioII.png"
                    className="card-img-top img-fluid"
                    alt="Ebook 3"
                    style={{ width: "160px", height: "208px", objectFit: "cover", margin: "0 auto" }}
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">
                      <a href="#ebook3" className="stretched-link text-decoration-none text-dark fw-bold small">
                        E-book Recursos y Ámbitos Socioemocionales II
                      </a>
                    </h5>
                    <p className="card-text mb-0">Grupo 3</p>
                    <p className="card-text">SD - Dirección de Nivel Medio Superior</p>
                  </div>
                </div>
              </div>

              {/* Ebook 4 */}
              <div className="col-12 col-sm-6 col-md-3 mb-4">
                <div className="card shadow-sm h-100 border-0">
                  <img
                    src="/miniatura_eRecursosAmbSocioII.png"
                    className="card-img-top img-fluid"
                    alt="Ebook 4"
                    style={{ width: "160px", height: "208px", objectFit: "cover", margin: "0 auto" }}
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">
                      <a href="#ebook4" className="stretched-link text-decoration-none text-dark fw-bold small">
                        E-book Recursos y Ámbitos Socioemocionales II
                      </a>
                    </h5>
                    <p className="card-text mb-0">Grupo 4</p>
                    <p className="card-text">SD - Dirección de Nivel Medio Superior</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MisEbooks;
