import Header from "../components/common/Header";
import Login from "../pages/Login";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import AccesosRapidos from "../components/AccesosRapidos";
import Recursos from "../components/Recursos";
import Compatibilidad from "../components/Compatibilidad";
import Footer from "../components/common/Footer";

/**
 * File: Inicio.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-04
 * Last modified: 2025-07-17
 * Description: Main component for the home page.
 */

function Inicio() {
  return (
    <>
      <Header /> {/* Outside the layout if you want it to be full width */}
      <Layout>
        {" "}
        {/* Layout component to center content and apply margins */}
        {/* Here you will find entrance cards, carousel, etc. */}
        <Login />
        <Carousel />
        <AccesosRapidos /> {/* Quick access section with cards */}
        <Recursos /> {/* Online resources and social media section */}
        <Compatibilidad />
        {/* Additional sections can be added here as needed */}
      </Layout>
      <Footer /> {/* Footer with contact information and links */}
    </>
  );
}

export default Inicio;
