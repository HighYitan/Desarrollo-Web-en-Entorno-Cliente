import {useContext, useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import { TokenContext } from "../context/TokenContext";
import { ThemeContext } from "../context/ThemeContext";
import {NavLink} from "react-router-dom";
export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { token, route } = useContext(TokenContext); // Show Register, Authenticate, and Highlights if user login token does not exist (Not logged)
  const [stickyClass, setStickyClass] = useState('relative');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
  
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  
  function stickNavbar() {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 125 ? setStickyClass('fixed top-0 z-50') : setStickyClass('relative');
    }
  };
  return(
    <div 
      id="navbar" 
      className={"w-full h-16 " + ((theme === "dark") ? "bg-black " : "bg-gray-300 ") + (stickyClass)}
      //onScroll={handleScroll}
    >
      <div className="flex flex-col md:flex-row justify-between items-center h-full px-4 md:px-8 sticky top-0">
        <div className={"flex justify-start items-center h-full space-x-4 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
          {!token ? (
            <>
              {route !== "/Registre" && (
                <NavLink to="/Registre" className={"font-bold text-xl"}>Registrar-se</NavLink>
              )}
              {route !== "/Autenticar" && (
                <NavLink to="/Autenticar" className={"font-bold text-xl"}>Autenticar-se</NavLink>
              )}
              {route !== "/" && (
                <NavLink to="/" className={"font-bold text-xl"}>Destacados</NavLink>
              )}
            </>
          ) : (
            <>
              {route !== "/Perfil" && (
                <NavLink to="/" className={"font-bold text-xl"}>Perfil</NavLink>
              )}
              {route !== "/" && (
                <NavLink to="/" className={"font-bold text-xl"}>Destacados</NavLink>
              )}
              {route !== "/Espais" && (
                <NavLink to="/Espais" className={"font-bold text-xl"}>Espais</NavLink>
              )}
              {route !== "/Comentaris" && (
                <NavLink to="/Comentaris" className={"font-bold text-xl"}>Comentaris</NavLink>
              )}
            </>
          )}
        </div>
        {route !== "/Comentaris" && (
                <NavLink to="/Comentaris" className={"font-bold text-xl"}>Comentaris</NavLink>
        )}
        <div className={"flex justify-end items-center h-full space-x-4 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
            <NavLink to="/" className={"font-bold text-xl"}>Destacados</NavLink>

            {!token ? (
            <>
              {route !== "/" && (
                <NavLink to="/" className={"font-bold text-xl"}>Destacados</NavLink>
              )}
            </>
          ) : (
            <>
              {route !== "/Perfil" && (
                <NavLink to="/" className={"font-bold text-xl"}>Filtros</NavLink>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}