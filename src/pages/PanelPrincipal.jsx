import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Bell, HelpCircle, Menu, User } from 'lucide-react';

/**
 * File: PanelPrincipal.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-08-05
 * Last modified: 2025-08-07
 * Description: Main component for the main panel page.
 */

const PanelPrincipal = () => {
  return (
    <>
      <Header />
      {/* Top bar with custom icons */}
        <nav className="navbar bg-white shadow sticky-top py-3 px-3">
          <div className="container-fluid d-flex justify-content-between align-items-center">

            {/* Scrollable menu */}
            <div
              className="d-flex overflow-auto flex-nowrap gap-2 text-nowrap text-black"
              style={{
                maxWidth: "calc(100% - 120px)",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              <a href="#" className="nav-link px-2">INICIO</a>
              <a href="#" className="nav-link px-2">COMUNIDADES</a>
              <a href="#" className="nav-link px-2">MIS EBOOKS</a>
              <a href="#" className="nav-link px-2">ADMINISTRADOR DE CONTENIDOS</a>
              <a href="#" className="nav-link px-2">COORDINACIÓN</a>
              <a href="#" className="nav-link px-2">DUDAS TÉCNICAS Y ACADÉMICAS</a>
              <a href="#" className="nav-link px-2">SERVICIOS ESCOLARES</a>
            </div>

            {/* Icons on the right */}
            
            <div className="d-flex justify-content-end align-items-center" style={{ width: "120px" }}>
              <button className="btn btn-link text-dark"><Bell size={20} /></button>
              <button className="btn btn-link text-dark"><HelpCircle size={20} /></button>
              <button className="btn btn-link text-dark"><User size={20} /></button>
              <button className="btn btn-link text-dark"><Menu size={20} /></button>
            </div>
           
          </div>
        </nav>


        {/* Dynamic main content centered and with margins thanks to Layout */}
        <Layout>
          <section className="my-5">
            <h2 className="text-xl font-bold mb-4">Bienvenido al Panel Principal</h2>
            <p className="text-gray-700">Aquí irán las tarjetas, secciones, etc.</p>
            {/* Later on, we will add cards, conditional menus, etc. */}
          </section>
        </Layout>

      <Footer />
    </>
  );
};

export default PanelPrincipal;