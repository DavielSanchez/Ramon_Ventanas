import Nueva_venta from "./Nueva_venta"
// import Search from "./Search"

function Ventas_top_bar() {
  return (
    <>
    <div className="ventaContainer">
      <h1>Ventas</h1>
        {/* <Search/> */}
      <Nueva_venta/>
    </div>
  </>
  )
}

export default Ventas_top_bar