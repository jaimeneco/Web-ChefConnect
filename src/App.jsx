import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import  { HomePage } from './pages/home/Home.jsx'
import { RecetasPage } from './pages/recetas/Recetas.jsx'
import { ComunidadPage } from './pages/comunidad/Comunidad.jsx'
import { DesafiosPage } from './pages/desafios/Desafios.jsx'
import { TycPage } from './pages/tyc/Tyc.jsx'
import { ContactoPage } from './pages/contacto/Contacto.jsx'





function App() {
  return (
        <BrowserRouter>
          <>
            <Routes>
            <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/recetas' element={<RecetasPage />} />
              <Route path='/comunidad' element={<ComunidadPage />} />
              <Route path='/desafios' element={<DesafiosPage />} />
              <Route path='/tyc' element={<TycPage />} />
              <Route path='/contacto' element={<ContactoPage />} />
            </Routes>
            </>
        </BrowserRouter>
      
          );
}
export default App;