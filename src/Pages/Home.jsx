import SideBar from "../Componentes/SideBar"
import Cuadros from "../Componentes/Cuadros"
import Acciones from "../Componentes/Acciones"
import Footer from "../Componentes/footer"
import '../../src/App.css'
import { Auth } from "../../FireBaseConfig/Authentication"

function Home() {
  Auth();
  return (
    <>
    <title>Ramon Ventana | Inicio</title>
        <SideBar/>
        <div className="content">
        <Cuadros/>
        <div className="actions-text">
            <h2>Acciones Rapidas</h2>
        </div>
        <hr />
        <Acciones/>
        <Footer/>
    </div>
        
    </>
  )
}

export default Home