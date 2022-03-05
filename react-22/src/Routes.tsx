import {
  //BrowserRouter será chamado de Router. 
  BrowserRouter as Router,
  Routes,//Routes é substituto do Switch (que ficou obsoleto)
  Route
} from 'react-router-dom'
import { Cart } from './pages/Cart'
import { Catalog } from './pages/Catalog'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* path é a rota que vai estar no navegador*/}
        {/* element é o component que vai ser renderizado.*/}
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  )
}