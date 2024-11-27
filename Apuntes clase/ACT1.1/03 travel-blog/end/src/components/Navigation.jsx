import {Link} from "react-router-dom";

export default function Navigation(){
  return (
    <div className="contenedor-nav">
    <nav className="navegacion-principal contenedor">
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link href="#">Blog</Link>
      <Link to="/store">Tienda</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  </div>
  )
}