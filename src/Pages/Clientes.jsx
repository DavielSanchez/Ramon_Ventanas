import SideBar from "../Componentes/SideBar"
import TopBar from "../Componentes/TopBar";
import Clientes_table from "../Componentes/Clientes_table"
import { Auth } from "../../FireBaseConfig/Authentication"
import Nuevo_cliente from "../Componentes/Nuevo_cliente";
function Clientes() {
  Auth();
  return (
    <>
    <title>BusinessName | Clientes</title>
    <SideBar/>
    <div className="content">
    <TopBar/>
    <h1>Clientes</h1>
        <hr />
    <Clientes_table/>
    <div className="productos-botones">
        <Nuevo_cliente/>
        </div>
    </div>
    </>
  )
}

export default Clientes