import { NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';

export default function Navbar() {
    // Detecta la página en la que te encuentras y aplica la clase activa al NavLink
    const activeClass = ({ isActive }) => (isActive && "active");

    return (
        <div className="row">
            <div
                className="btn-group d-flex flex-column flex-sm-row"
                role="group"
                aria-label="Button group"
            >
                <NavLink to="/" className={"btn btn-dark " + activeClass}>
                    <span className="bi bi-house-door-fill" />
                </NavLink>
                <NavLink to="/Proyectos" className={"btn btn-dark " + activeClass}>
                    <span className="bi bi-hammer px-1" />
                        Proyectos
                    <span className="bi bi-hammer px-1" />
                </NavLink>
                <NavLink to="/Noticias" className={"btn btn-dark " + activeClass}>
                    <span className="bi bi-book px-1" />
                        Noticias
                    <span className="bi bi-book px-1" />
                </NavLink>
                <NavLink to="/Contacto" className={"btn btn-dark " + activeClass}>
                    <span className="bi bi-journal-bookmark-fill px-1" />
                        Contacto
                    <span className="bi bi-journal-bookmark-fill px-1" />
                </NavLink>
            </div>
        </div>
    );
}