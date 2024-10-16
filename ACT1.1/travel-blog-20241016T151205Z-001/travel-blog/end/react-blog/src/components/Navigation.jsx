import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <div className="contenedor-nav">
      <nav className="navegacion-principal contenedor">
        <Link to="/">Inicio</Link>
        <a href="#">Nosotros</a>
        <a href="#">Blog</a>
        <a href="#">Tienda</a>
        <Link to="/contact">Contacto</Link>
      </nav>
    </div>
  )
}

export default Navigation