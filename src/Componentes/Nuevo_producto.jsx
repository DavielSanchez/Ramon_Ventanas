
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../FireBaseConfig/Firebase';
import { uploadFile } from '../../FireBaseConfig/Firebase';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";

function Nuevo_producto() {

  const MySwal = withReactContent(Swal)

  // const productCollection = collection(db, 'Productos')
  const [Nombre, setNombre] = useState('')
  const [Precio, setPrecio] = useState('')
  const [Cantidad, setCantidad] = useState('')

  const agregar_producto = async (e) => {
    e.preventDefault()

    setNombre(e.target.Nombre.value)
    setPrecio(e.target.Precio.value)
    setCantidad(e.target.Cantidad.value)

    try {
      await addDoc(collection(db, "Productos"), {
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
        <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Agregar producto
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Agregando Producto ...</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={agregar_producto} data-bs-dismiss="modal">
        <div className="mb-3">
          <label htmlFor="Nombre" className="form-label">Nombre del producto</label>
          <input type="text" className="form-control" id="Nombre" placeholder="Ventana de cristal" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="Precio" className="form-label">Precio de venta</label>
          <input type="number" className="form-control" id="Precio" placeholder="5500" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="Cantidad" className="form-label">Cantidad inicial</label>
          <input type="number" className="form-control" id="Cantidad" placeholder="2" required/>
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

export default Nuevo_producto