import React from 'react'
import { Global } from "../../helpers/Global"
import { Peticion } from '../../helpers/Peticion'
import { Link } from 'react-router-dom'


export const Listado = ({ articulos, setArticulos }) => {
  return (

    articulos.map(articulo => {

      const eliminar = async (id) => {
        let { datos } = await Peticion(Global.url + "articulo/" + id, "DELETE");

        if (datos.status === "success") {
          const articulosActualizados = articulos.filter(articulo => articulo._id !== id);
          setArticulos(articulosActualizados);
        }
      }
      return (

        <article key={articulo._id} className="articulo-item">
          <div className='mascara'>
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen}></img>}
            {articulo.imagen == "default.png" && <img src='https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg'></img>}
          </div>

          <div className='datos'>

            <h3 className="title"><Link to={"/articulo/" + articulo._id}>{articulo.titulo}</Link></h3>
            <p className="description">{articulo.contenido}</p>

            <Link to={"/editar/" + articulo._id} className="edit">Editar</Link>
            <button className="delete" onClick={() => {
              eliminar(articulo._id)
            }}>Borrar</button>

          </div>
        </article>

      );
    })
  )
}
