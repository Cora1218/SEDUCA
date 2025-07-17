import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';

/**
 * File: index.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-04
 * Last modified: 2025-07-17
 * Description: Main router component for the application, handling all route definitions.
 */

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
