import SideBar from "../Componentes/SideBar"
import TopBar from "../Componentes/TopBar";
import Ventas_table from "../Componentes/Ventas_table"
import { Auth } from "../../FireBaseConfig/Authentication"
import Ventas_top_bar from "../Componentes/Ventas_top_bar";
import Sales_cuadros from "../Componentes/Sales_cuadros";
import '../../public/Styles/Ventas.css'
function Ventas() {
  Auth();
  return (
    <>
        <title>BusinessName | Ventas</title>
        <SideBar/>
        <div className="content">
        <TopBar/>
        {/* <h1>Ventas</h1> */}
            <Ventas_top_bar/>
        <hr />
        <Sales_cuadros/>
        <div className="listado_ventas">
        <Ventas_table/>
        </div>
    </div>
    </>
  )
}

export default Ventas