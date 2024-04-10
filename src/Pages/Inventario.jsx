import SideBar from "../Componentes/SideBar"
import Inventario_table from "../Componentes/Inventario_table"
import { Auth } from "../../FireBaseConfig/Authentication"
function Inventario() {
  Auth();
  return (
    <>
    <title>Ramon Ventana | Inventario</title>
    <SideBar/>
    <div className="content">
        <h1>Inventario</h1>
        <hr />
        <Inventario_table/>
    </div>
    </>
    
  )
}

export default Inventario