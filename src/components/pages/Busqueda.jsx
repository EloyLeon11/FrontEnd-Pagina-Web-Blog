import React from 'react'
import { useState, useEffect } from "react"
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';
import { useParams } from 'react-router-dom';

export const Busqueda = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();


  useEffect(() => {
    conseguirArticulos();

  }, []);

  
  useEffect(() => {
    conseguirArticulos();

  }, [params]);



  const conseguirArticulos = async () => {
    
  const { datos } = await Peticion(Global.url + "buscar/" + params.busqueda, "GET");

    if (datos.status === "success") {
      setArticulos(datos.articulos);    
    }else{
      setArticulos([]);
    }

    setCargando(false)

  }

  return (
    <>    
      {cargando ? "Cargando..." : 
      <Listado articulos={articulos} setArticulos={setArticulos}/> }   
    </>
  )
}
