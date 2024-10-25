import '../../public/Styles/Acciones.css'
import { Link } from 'react-router-dom'
function Acciones() {
  return (
    <>
        <div className="acciones-grid">
            <Link to={'/ventas'} className="acciones-item">
                <h2>Ventas</h2>
            </Link>
            <Link to={'/cotizaciones'} className="acciones-item">
                <h2>Cotizaciones</h2>
            </Link>
            <Link to={'/productos'} className="acciones-item">
                <h2>Productos</h2>
            </Link>
            {/* <Link to={'/inventario'} className="acciones-item">
                <h2>Inventario</h2>
            </Link> */}
            <Link to={'/clientes'} className="acciones-item">
                <h2>Nuevo cliente</h2>
            </Link>
            
        </div>
    </>
  )
}

export default Acciones