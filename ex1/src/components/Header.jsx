import Navbar from "./Navbar";
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function Header() {
    const [titulo, setTitulo] = useState("");
    const [icono, setIcono] = useState("");
    const ruta = useLocation(); // Hook para obtener la ruta actual y poder actualizar el título en consecuencia.

    function actualizaTitulo(){
        switch (ruta.pathname) {
          case "/":
            setTitulo("Bienvenido a mi Portfolio");
            setIcono("bi bi-house-door-fill");
            break;
          case "/Proyectos":
            setTitulo("Nuestros Proyectos");
            setIcono("bi bi-hammer");
            break;
          case "/Noticias":
            setTitulo("Noticias del Mes");
            setIcono("bi bi-book");
            break;
          case "/Contacto":
            setTitulo("Información de Contacto");
            setIcono("bi bi-journal-bookmark-fill");
            break;
          default: //No hace falta el default para dar el pego en el título mientras carga porque tengo una pantalla de carga en App.jsx aunque lo pondré igual por si alguien tiene un ordenador muy lento.
            setTitulo("Bienvenido a mi Portfolio");
            setIcono("bi bi-house-door-fill");
            break;
        }
    }

    useEffect(() => {
      actualizaTitulo();
    }, [ruta.pathname]); //Cada vez que se cambie la ruta, se actualiza el título.

    return(
        <header class="justify-content-center">
            <Navbar />
            <div className="row text-white text-center">
                <span className={icono + " my-3 fs-1"} />
                <h1>{titulo}</h1>
                <hr className="border border-light border-top border-3 my-0" />
            </div>
        </header>
    )
}