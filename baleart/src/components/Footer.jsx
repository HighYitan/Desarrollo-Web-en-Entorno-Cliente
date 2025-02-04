import { NavLink } from "react-router-dom";
export default function Footer() {
    function handleGoingTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return(
        <footer className="fixed bottom-0 w-full bg-black text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h5 className="flex text-sm font-bold">
                            © 2025 Baleart. Tots els drets reservats.
                        </h5>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <NavLink to="/Nosaltres" className={"text-sm font-bold hover:underline"}>Qui Som?</NavLink>
                        <NavLink to="/Contacte" className={"text-sm font-bold hover:underline"}>Contacta'ns</NavLink>
                        {/* Scroll to Top Button */}
                        <button
                            id="scrollToTopButton"
                            className="bg-violet-900 text-white font-bold text-3xl py-3 px-6 rounded-full"
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