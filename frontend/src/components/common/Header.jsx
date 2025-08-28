import './Header.css';

/**
 * File: Header.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-04
 * Last modified: 2025-07-17
 * Description: Component that displays the header section of the website.
 */

function Header() {
  return (
    <header>
      {/* Pleca with green background image and icons on top of it */}
      <div
        className="pleca2021 py-2 border-bottom"
        style={{
          backgroundImage: "url(/pleca-arriba_2021-2025.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="container d-flex flex-wrap gap-3 justify-content-start pleca-container"
        >
          <a
            className="icon-asome text-white text-decoration-none d-flex align-items-center"
            href="https://www.facebook.com/DECyD.UAEM/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook fs-5"></i>
          </a>
          <a
            className="icon-asome text-white text-decoration-none d-flex align-items-center"
            href="https://twitter.com/@DECyD_UAEM"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter fs-5"></i>
          </a>
          <a
            className="icon-asome text-white text-decoration-none d-flex align-items-center"
            href="mailto:seduca@uaemex.mx"
          >
            <i className="bi bi-envelope-fill fs-5"></i>&nbsp;
            <span className="text-normal">seduca@uaemex.mx</span>
          </a>
          <a
            className="icon-asome text-white text-decoration-none d-flex align-items-center"
            href="https://atencion.uaemex.mx/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-camera-video-fill fs-5"></i>&nbsp;
            <span className="text-normal">Buzón de atención universitaria</span>
          </a>
        </div>
      </div>

      {/* Logo and title */}
      <div className="container-fluid row align-items-center justify-content-center">
        <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
          <img
            src="/Es_UAEM.png"
            alt="Logo UAEMex"
            className="logo-uaemex"
          />
        </div>
        <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
          <img
              src="/seduca_x.png"
              alt="Logo SEDUCA"
              className="seduca-logo"
          />
        </div>
        <div className="col-12 col-md-4 text-center">
          <img
            src="/SD.png"
            alt="Secretaría de Docencia"
            className="SD-logo"
          />
        </div>
      </div>
      <hr className="mt-0 mb-0 border-line opacity-75 w-100" />
    </header>
  );
}

export default Header;
