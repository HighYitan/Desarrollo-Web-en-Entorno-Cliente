import {useContext} from "react";
import { NavLink } from "react-router-dom";
import { TokenContext } from "../context/TokenContext";
import { ThemeContext } from "../context/ThemeContext";
export default function Footer() {
    const { theme } = useContext(ThemeContext);
    const { route } = useContext(TokenContext);
    function handleGoingTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return(
        <footer className={"fixed bottom-0 w-full py-4 " + ((theme === "dark") ? "bg-black text-white" : "bg-gray-300 text-gray-900")}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h5 className="flex text-sm font-bold">
                            © 2025 Baleart. Tots els drets reservats.
                        </h5>
                    </div>
                    <div className="flex space-x-4 items-center">
                        {route !== "/Nosaltres" && (
                            <NavLink to="/Nosaltres" className={"text-sm font-bold hover:underline"}>Qui Som?</NavLink>
                        )}
                        {route !== "/Contacte" && (
                            <NavLink to="/Contacte" className={"text-sm font-bold hover:underline"}>Contacta'ns</NavLink>
                        )}
                        {/* Scroll to Top Button */}
                        <button
                            id="scrollToTopButton"
                            className={"font-bold text-3xl py-3 px-6 rounded-full " + ((theme === "dark") ? "bg-violet-950 text-white" : "bg-violet-300 text-gray-900")}
                            onClick={handleGoingTop}
                        >
                            ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}