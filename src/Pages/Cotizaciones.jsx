import SideBar from "../Componentes/SideBar"
import Cotizaciones_table from "../Componentes/Cotizaciones_table"
import Nueva_cotizacion from "../Componentes/Nueva_cotizacion"
function Cotizaciones() {
  return (
    <>
    <title>Ramon Ventana | Inventario</title>
    <SideBar/>
    <div className="content">
        <h1>Cotizaciones</h1>
        <hr />
        <Cotizaciones_table/>
        <div className="productos-botones">
        <Nueva_cotizacion/>
        </div>
    </div>
    </>
  )
}

export default Cotizaciones