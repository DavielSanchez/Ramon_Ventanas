import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../FireBaseConfig/Firebase';

function Nueva_cotizacion() {
    const [Nombre, setNombre] = useState('')
  const [Precio, setPrecio] = useState('')
  const [Cantidad, setCantidad] = useState('')
  const [Monto, setMonto] = useState('')

  const agregar_producto = async (e) => {
    e.preventDefault()

    setNombre(e.target.Nombre.value)
    setPrecio(e.target.Precio.value)
    setCantidad(e.target.Cantidad.value)
    setMonto(e.target.imagen.value)

    try {
      await addDoc(collection(db, "Cotizacion"), {
        Nombre_del_cliente: Nombre,
        Precio: Precio,
        // Cantidad_de_productos : Cantidad,
        // Monto: Monto
      });
      // console.log("Document written with ID: ", docRef.id);
      console.log('')
    } catch (e) {
      // console.error("Error adding document: ", e);
      console.log('')
    }
  }

  return (
    <>
        <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Crear cotización
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva Cotizacion</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={agregar_producto}>
        <div className="mb-3">
          <label htmlFor="Nombre" className="form-label">Nombre del cliente</label>
          <input type="text" className="form-control" id="Nombre" placeholder="Daviel Sanchez"/>
        </div>
        <div className="mb-3">
          <label htmlFor="Precio" className="form-label">Productos</label>
          <select className="form-select" aria-label="Default select example" id='Precio'>
            <option value='1'>Four</option>
            <option value="2">One</option>
            <option value="3">Two</option>
            <option value="4">Three</option>
        </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Cantidad" className="form-label">Cantidad inicial</label>
          <input type="number" className="form-control" id="Cantidad" placeholder="2"/>
        </div>
        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">Enlace de la imagen</label>
          <input type="text" className="form-control" id="imagen" placeholder="..."/>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Default file input example</label>
          <input className="form-control" type="file" id="formFile"/>
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

export default Nueva_cotizacion