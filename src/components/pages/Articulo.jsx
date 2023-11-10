import React from 'react'
import { useState, useEffect } from "react"
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { useParams } from 'react-router-dom';


export const Articulo = () => {

  const [articulo, setArticulo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();


  useEffect(() => {
    conseguirArticulo();

  }, [])

  const conseguirArticulo = async () => {

    const { datos } = await Peticion(Global.url + "articulo/" + params.id, "GET");

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }

    setCargando(false)

  }

  return (
    <div className='jumbo'>
      {cargando ? "Cargando..." :

        <>
          <div className='mascara_articulo'>
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen}></img>}
            {articulo.imagen == "default.png" && <img src='https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg'></img>}
          </div>
          <h1>{articulo.titulo}</h1>
          <span>{articulo.fecha}</span>
          <p>{articulo.contenido}</p>
        </>

      }
    </div>
  )
}
