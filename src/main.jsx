// 1️⃣ Importa el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// 2️⃣ Importa funciones de React y React DOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 3️⃣ Importa el archivo de estilos CSS personalizados (si se usa)
import './index.css'
// 4️⃣ Importa el componente principal: App.jsx
import App from './App.jsx' 

// 5️⃣ Conecta React con el <div id="root"> de index.html y renderiza la app
// ✅ Aquí ocurre la "inyección":
//    React toma control del <div id="root"> del index.html, y coloca ahí lo que retorna el componente App.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
