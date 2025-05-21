import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import  { HomePage } from './pages/home/Home.jsx'
import { RecetasPage } from './pages/recetas/Recetas.jsx'
import { ComunidadPage } from './pages/comunidad/Comunidad.jsx'
import { RecetaPage } from './pages/single-receta/SingleReceta.jsx'





function App() {
  return (
        <BrowserRouter>
          <>
            <Routes>
            <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/recetas' element={<RecetasPage />} />
              <Route path='/comunidad' element={<ComunidadPage />} />
              <Route path='/receta' element={<RecetaPage />} />

            </Routes>
            </>
        </BrowserRouter>
      
          );
}
export default App;