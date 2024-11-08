import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../FireBaseConfig/Firebase';
import { uploadFile } from '../../FireBaseConfig/Firebase';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";

function Nueva_venta() {

  const MySwal = withReactContent(Swal)

// const productCollection = collection(db, 'Ventas')
const [Nombre, setNombre] = useState('')
const [Precio, setPrecio] = useState('')
const [Cantidad, setCantidad] = useState('')

const nueva_Venta = async (e) => {
  e.preventDefault()

  setNombre(e.target.Nombre.value)
  setPrecio(e.target.Precio.value)
  setCantidad(e.target.Cantidad.value)

  try {
    await addDoc(collection(db, "Ventas"), {
      Nombre: Nombre,
      Precio: Precio,
      Cantidad: Cantidad
    });
    // console.log("Document written with ID: ", docRef.id);
    await uploadFile
    MySwal.fire({
      title: "Muy bien!",
      text: "El producto se ha agregado con exito.",
      icon: "success"
    });
  } catch (e) {
    MySwal.fire({
      title: "Error!",
      text: "Ha ocurrido un error al agregar un producto nuevo.",
      icon: "error"
    });
  }
}

return (
  <>
    
      <button type="button" className="btn btn-primary d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle me-2 mt-1" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        <h4>
        Nueva Venta
        </h4>
      </button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">Agregando Producto ...</h1>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <form onSubmit={nueva_Venta}>
      <div className="mb-3">
        <label htmlFor="Nombre" className="form-label">Nombre del producto</label>
        <input type="text" className="form-control" id="Nombre" placeholder="Ventana de cristal"/>
      </div>
      <div className="mb-3">
        <label htmlFor="Precio" className="form-label">Precio de venta</label>
        <input type="number" className="form-control" id="Precio" placeholder="5500"/>
      </div>
      <div className="mb-3">
        <label htmlFor="products" className="form-label">Productos</label>
        {/* <select className="form-select" aria-label="Default select example" multiple placeholder='Elige los productos'> 
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}
        <select className="form-select" aria-label="Default select example" name='products' multiple>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
      <button type="submit" className="btn btn-primary">Guargar</button>
    </div>
      </form>
    </div>
    
  </div>
</div>
</div>
  </>
)
}

export default Nueva_venta