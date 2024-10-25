import '../../public/Styles/cuadros.css'
import Cuadro from './Cuadro'
function Cuadros() {
  return (
    <>
        <div className="cuadros">
            <Cuadro title='Ventas' action1='Nueva Venta' action2='Ver Ventas'/>
            <Cuadro title='Productos' action1='Agregar Productos' action2='Ver Productos'/>
            <Cuadro title='Cotizaciones' action1='Nueva Cotizacion' action2='Ver Cotizaciones'/>
            <Cuadro title='Clientes' action1='Nuevo cliente' action2='Ver Clientes'/>
        </div>
    </>
  )
}

export default Cuadros