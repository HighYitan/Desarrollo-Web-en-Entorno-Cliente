import { NavLink } from 'react-router-dom';
//import '../assets/css/Navbar.css';

export default function Navbar() {
    // Detecta la página en la que te encuentras y aplica la clase activa al NavLink
    //const activeClass = ({ isActive }) => (isActive && "active");

    return (
        /*<div className="row">
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
        </div>*/
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Home
                </NavLink>
                <NavLink className="navbar-brand" to="/favorites">
                    Favourites
                </NavLink>
                <NavLink className="navbar-brand" to="/stock">
                    Stock
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                  </ul>
              </div>
            </div>
      </nav>
    );
}