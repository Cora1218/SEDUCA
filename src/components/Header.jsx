function Header() {
  return (
    <header>
      {/* TopBar institucional */}
      <div className="bg-success text-white py-2 px-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
            <i className="bi bi-envelope-fill"></i>
            <span>seduca@uaemex.mx</span>
          </div>
          <div>Buzón de atención universitaria</div>
        </div>
      </div>

      {/* Aquí irá el logo UAEM y SEDUCA */}
    </header>
  );
}

export default Header;
