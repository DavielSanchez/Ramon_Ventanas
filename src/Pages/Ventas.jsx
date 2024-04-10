import SideBar from "../Componentes/SideBar"
import Ventas_table from "../Componentes/Ventas_table"
import { Auth } from "../../FireBaseConfig/Authentication"
import Nueva_venta from "../Componentes/Nueva_venta";
function Ventas() {
  Auth();
  return (
    <>
        <title>Ramon Ventana | Ventas</title>
        <SideBar/>
        <div className="content">
        <h1>Ventas</h1>
        <hr />
        <Ventas_table/>
        <div className="productos-botones">
            <Nueva_venta/>
        </div>
    </div>
    </>
  )
}

export default Ventas