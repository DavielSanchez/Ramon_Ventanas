import '../../public/Styles/Productos.css'
import Window from '../assets/Window.png'
function Productos() {
  return (
    <div className="productos-grid">
        <div className="productos-item">
            <div className="imagen">
                <img src={Window} alt=""  /><br />
            </div>
            <div className="producto-name">
                <p>Ventana de cristal</p>
            </div>
        </div>
    </div>
  )
}

export default Productos