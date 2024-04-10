import '../../public/Styles/Acciones.css'
import { Link } from 'react-router-dom'
function Acciones() {
  return (
    <>
        <div className="acciones-grid">
            <Link to={'/ventas'} className="acciones-item">
                <h2>Nueva Venta</h2>
            </Link>
            <Link to={'/cotizaciones'} className="acciones-item">
                <h2>Nueva Cotizacion</h2>
            </Link>
            <Link to={'/productos'} className="acciones-item">
                <h2>Nuevo producto</h2>
            </Link>
            <Link to={'/inventario'} className="acciones-item">
                <h2>Ver inventario</h2>
            </Link>
            
        </div>
    </>
  )
}

export default Acciones