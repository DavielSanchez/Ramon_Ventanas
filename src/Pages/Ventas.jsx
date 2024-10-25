import SideBar from "../Componentes/SideBar"
import TopBar from "../Componentes/TopBar";
import Ventas_table from "../Componentes/Ventas_table"
import { Auth } from "../../FireBaseConfig/Authentication"
import Nueva_venta from "../Componentes/Nueva_venta";
function Ventas() {
  Auth();
  return (
    <>
        <title>BusinessName | Ventas</title>
        <SideBar/>
        <div className="content">
        <TopBar/>
        {/* <h1>Ventas</h1> */}
            <Nueva_venta/>
        <hr />
        <Ventas_table/>
        <div className="productos-botones">
        </div>
    </div>
    </>
  )
}

export default Ventas