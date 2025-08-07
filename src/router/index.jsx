import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import PanelPrincipal from '../pages/PanelPrincipal';


/**
 * File: index.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-04
 * Last modified: 2025-08-05
 * Description: Main router component for the application, handling all route definitions.
 */

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/panel-principal" element={<PanelPrincipal />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
