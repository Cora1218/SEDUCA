/**
 * File: frontend/src/router/index.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-04
 * Last modified: 2025-10-13
 * Description: Main router component for the application, handling all route definitions.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import PanelInicio from '../pages/PanelInicio';
import PanelPrincipal from '../pages/PanelPrincipal';
import Comunidades from "../components/panel/sections/ComunidadesFavoritas";
import MisEbooks from "../components/panel/sections/MisEbooks";


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />

        {/* Main panel with Navbar, Footer y Layout */}
        <Route path="/panel" element={<PanelPrincipal />} >
          {/* Base route: all sections together */}
          <Route index element={<PanelInicio />} />

          {/* Individual routes for each section */}
          <Route path="comunidades" element={<Comunidades/>} />
          <Route path="mis-ebooks" element={<MisEbooks/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
