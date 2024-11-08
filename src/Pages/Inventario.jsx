import SideBar from "../Componentes/SideBar"
import Inventario_table from "../Componentes/Inventario_table"
import TopBar from "../Componentes/TopBar";
import Inventario_top_bar from "../Componentes/Inventarios_top_bar";
import Producto_estado_chart from "../Componentes/Producto_estado_chart";
import Producto_por_categoria from "../Componentes/Producto_por_categoria";
import Inventario_stock_alert from "../Componentes/Inventario_stock_alert";
import '../../public/Styles/Inventario.css'
import { Auth } from "../../FireBaseConfig/Authentication"
function Inventario() {
  Auth();
  return (
    <>
    <title>BusinessName | Inventario</title>
    <SideBar/>
    <div className="content">
      <TopBar/>
        {/* <h1>Inventario</h1> */}
        <Inventario_top_bar/>
        <hr />
        <div className="Inventario_stats">
          <div className="estado_chart">
            <Producto_estado_chart/>
          </div>
          <div className="stock_alert_container overflow-auto">
          <Inventario_stock_alert/>
          </div>
          <div className="estado_chart">
            <Producto_por_categoria/>
          </div>
        </div>
        <Inventario_table/>
    </div>
    </>
    
  )
}

export default Inventario