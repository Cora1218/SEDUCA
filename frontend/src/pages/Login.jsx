/**
 * File: frontend/src/pages/Login.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-04
 * Last modified: 2025-10-09
 * Description: Component that displays a responsive login form for user authentication.
 */
import "./Login.css";

function Login() {
  return (
    <>
      {/* <Header /> */}
    
      {/* Here are the log-in cards */}
      <section className="pt-2 pb-0 bg-light">
        <div className="container d-flex flex-column align-items-center">
          <div className="row justify-content-center gap-4">
            {/* Card 1: UAEMéx mail */}
            <div className="col-md-3 bg-white border rounded shadow-sm p-4"> 
              <h6 className="text-verde-uaemex fw-bold text-center mb-3">
                INICIO CON CORREO UAEMéx <img src="https://res-h3.public.cdn.office.net/owamail/20230721005.10/resources/images/favicons/mail-seen.ico" alt="Outlook" width="15" height="15" className="me-1 align-baseline"/>
              </h6>
              <p className="small text-center">
                En caso de no haber ingresado con cuenta UAEMéx previamente, asegúrate de
                tener registrada su cuenta de correo institucional en su perfil de SEDUCA.
              </p>
              <a href="https://seduca.uaemex.mx/download/GuiaParaAgregar_CorreoInstitucional.pdf" target="_blank" rel="noopener noreferrer" className="small text-center text-verde-uaemex d-block mb-3">
                - Aquí te indicamos cómo -
              </a>

              <div className="d-grid">
                <button className="btn btn-custom-green">
                  INGRESAR <i className="bi bi-box-arrow-in-right"></i>
                </button>
              </div>
            </div>

            {/* Card 2: SEDUCA user */}
            <div className="col-md-3 bg-white border rounded shadow-sm p-4">
              <h6 className="text-oro-uaemex fw-bold text-center mb-3">
                INICIO CON USUARIO SEDUCA
              </h6>
              <input
                type="text"
                className="form-control mb-2 input-borde-login"
                placeholder="Usuario"
                aria-label="Usuario"
              />
              <input
                type="password"
                className="form-control mb-3 input-borde-login"
                placeholder="Contraseña"
                aria-label="Contraseña"
              />
              <a href="#" target="_blank" rel="noopener noreferrer" className="small text-center text-oro-uaemex d-block mb-3">
                - Recuperar contraseña -
              </a>
              <div className="d-grid">
                <button className="btn btn-custom-oro text-white">
                  INGRESAR <i className="bi bi-box-arrow-in-right"></i>
                </button>
              </div>
            </div>
            {/* Card 3: Code */}
            <div className="col-md-3 bg-white border rounded shadow-sm p-4">
              <h6 className="text-gray-uaemex fw-bold text-center mb-2">INICIO CON CÓDIGO</h6>
              <p className="small text-center mb-3">
                Con el código de acceso proporcionado por el profesor se une a determinada comunidad, con el perfil de estudiante.
              </p>
              <input
                type="text"
                className="form-control mb-4 input-borde-codigo"
                placeholder="Código"
                aria-label="Código"
              />
              <div className="d-grid">
                <button className="btn btn-custom-dark">
                  INGRESAR <i className="bi bi-box-arrow-in-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
