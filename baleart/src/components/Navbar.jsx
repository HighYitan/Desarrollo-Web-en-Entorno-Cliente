import {useContext, useState, useEffect} from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { LanguageContext } from "../context/LanguageContext";
import {NavLink} from "react-router-dom";
import Filter from "./Filter";
export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { token, route } = useContext(TokenContext); // Show Register, Authenticate, and Highlights if user login token does not exist (Not logged)
  const [stickyClass, setStickyClass] = useState('relative');
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar); // Add event listener to window scroll
  
    return () => {
      window.removeEventListener('scroll', stickNavbar); // Remove event listener to window scroll
    };
  }, []);
  
  function stickNavbar() {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 125 ? setStickyClass('fixed top-0 z-50') : setStickyClass('relative'); // If window scroll is greater than 125px, set sticky class to fixed
    }
  };

  function toggleFilters(){ // Show or hide filters
    setShowFilter(!showFilter);
  }
  return(
    <div 
      id="navbar" 
      className={"w-full py-4 " + ((theme === "dark") ? "bg-black " : "bg-gray-300 ") + (stickyClass)}
      //onScroll={handleScroll}
    >
      <div className="flex flex-col md:flex-row justify-between items-center h-full px-4 md:px-8 sticky top-0">
        <div className={"flex justify-start items-center h-full space-x-4 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
          {!token ? ( // Show Register, Authenticate, and Highlights if user login token does not exist (Not logged)
            <>
              {route !== "/Registre" && ( // Show Register if route is not /Registre
                <NavLink to="/Registre" className={"font-bold text-xl"}>
                  {language === "CA" && ("Registrar-se")}
                  {language === "ES" && ("Registrarse")}
                  {language === "EN" && ("Sign Up")}
                </NavLink>
              )}
              {route !== "/Autenticar" && ( // Show Authenticate if route is not /Autenticar
                <NavLink to="/Autenticar" className={"font-bold text-xl"}>
                  {language === "CA" && ("Autenticar-se")}
                  {language === "ES" && ("Autenticarse")}
                  {language === "EN" && ("Log In")}
                </NavLink>
              )}
            </>
          ) : ( // Show Profile, Spaces, and Comments if user login token exists (Logged)
            <>
              {route !== "/Perfil" && ( // Show Profile if route is not /Perfil
                <NavLink to="/Perfil" className={"font-bold text-xl"}>
                  {(language === "CA" || language === "ES") && "Perfil"}
                  {language === "EN" && ("Profile")}
                </NavLink>
              )}
              {route !== "/Espais" && ( // Show Spaces if route is not /Espais
                <NavLink to="/Espais" className={"font-bold text-xl"}>
                  {language === "CA" && ("Espais")}
                  {language === "ES" && ("Espacios")}
                  {language === "EN" && ("Spaces")}
                </NavLink>
              )}
              {route !== "/Comentaris" && ( // Show Comments if route is not /Comentaris
                <NavLink to="/Comentaris" className={"font-bold text-xl"}>
                  {language === "CA" && ("Comentaris")}
                  {language === "ES" && ("Comentarios")}
                  {language === "EN" && ("Comments")}
                </NavLink>
              )}
            </>
          )}
        </div>
        <div className={"flex justify-end items-center h-full space-x-4 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
          {route !== "/" && ( // Show Highlights if route is not /
              <NavLink to="/" className={"font-bold text-xl"}>
              {language === "CA" && ("Destacats")}
              {language === "ES" && ("Destacados")}
              {language === "EN" && ("Highlights")}
            </NavLink>
          )}
          {token && (
            <>
              {(route === "/Espais") && ( // Show filter button if route is /Espais
                <button onClick={toggleFilters} className={"font-bold text-xl"}>
                  {language === "CA" && ("Filtres ↓")}
                  {language === "ES" && ("Filtros ↓")}
                  {language === "EN" && ("Filters ↓")}
                </button>
              )}
            </>
          )}
        </div>
      </div>
      {(route === "/Espais") && ( // Show filter component if route is /Espais
        showFilter && (
          <Filter/>
        )
      )}
    </div>
  )
}