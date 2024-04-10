import SideBar from "../Componentes/SideBar"
import Producto from "../Componentes/Productos"
import Nuevo_producto from "../Componentes/Nuevo_producto"
import '../../src/App.css'
import { Auth } from "../../FireBaseConfig/Authentication"
function Productos() {
  Auth();
  return (
    <>
    <title>Ramon Ventana | Productos</title>
        <SideBar/>
        <div className="content">
        <h1>Productos</h1>
        <hr />
        <Producto/>
        <div className="productos-botones">
        <Nuevo_producto/>
        </div>
    </div>
    </>
  )
}

export default Productos