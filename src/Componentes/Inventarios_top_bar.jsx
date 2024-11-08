import Nuevo_producto from "./Nuevo_producto"
// import Search from "./Search"

function Inventario_top_bar() {
  return (
    <>
    <div className="ventaContainer">
      <h1>Inventario</h1>
        {/* <Search/> */}
      <Nuevo_producto/>
    </div>
  </>
  )
}

export default Inventario_top_bar