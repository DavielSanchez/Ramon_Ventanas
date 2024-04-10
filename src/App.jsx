import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//Pages
import Home from './Pages/Home'
// import Clientes from './Pages/Clientes'
import Inventario from './Pages/Inventario'
import Productos from './Pages/Productos'
import Ventas from './Pages/Ventas'
import Cotizaciones from './Pages/Cotizaciones'
import Login from './Pages/Login'
import Error from './Pages/Error'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path="/clientes" element={<Clientes/>}/> */}
        <Route path="/inventario" element={<Inventario/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/ventas" element={<Ventas/>}/>
        <Route path="/cotizaciones" element={<Cotizaciones/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
