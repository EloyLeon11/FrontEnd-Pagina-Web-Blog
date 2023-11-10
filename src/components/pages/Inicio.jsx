import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (

    <div className='jumbo'>
      <h1>Bienvenido a mi pagina web tipo Blog </h1>
      <Link to="/articulos" className='button'>Ver los artículos</Link>
    </div>

  )
}
