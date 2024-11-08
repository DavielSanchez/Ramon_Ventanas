import SideBar from "../Componentes/SideBar"
import TopBar from "../Componentes/TopBar"
import Finanzas_ad from "../Componentes/Finanzas_ad"
// import Acciones from "../Componentes/Acciones"
import Footer from "../Componentes/footer"
import Inventario_stock_alert from "../Componentes/Inventario_stock_alert"
import Cobros_pendientes_table from "../Componentes/Cobros_pendientes_table"
import '../../src/App.css'
import { Auth } from "../../FireBaseConfig/Authentication"

function Home() {

  Auth();


  return (
    <>
    <title>BusinessName | Inicio</title>
        <SideBar/>
        <div className="content">
          <TopBar/>
        <Finanzas_ad/>
        {/* <div className="actions-text">
            <h2>Acciones Rapidas</h2>
        </div>
        <hr /> */}
        <div className="home_alert_lists mt-4">
          <div className="stock_alert_home">
          <Inventario_stock_alert/>
          </div>
          <div className="stock_alert_home">
          <Cobros_pendientes_table/>
          </div>
        </div>
        {/* <Acciones/> */}
        <Footer/>
    </div>
    </>
  )
}

export default Home