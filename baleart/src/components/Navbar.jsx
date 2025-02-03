import {useState} from "react";
export default function Navbar() {
    /*useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById('navbar');
          if (window.scrollY > 125) {
            navbar.classList.add('fixed', 'top-0', 'w-full');
            navbar.classList.remove('relative');
          } else {
            navbar.classList.add('relative');
            navbar.classList.remove('fixed', 'top-0', 'w-full');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);*/
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [y, setY] = useState(0);
    function handleScroll() {
        //const navbar = document.getElementById('navbar');
        setY(window.scrollY);
        if (y > 125) {
            //navbar.classList.add('fixed', 'top-0', 'w-full');
            //navbar.classList.remove('relative');
            console.log("niglett")
            setNavbarFixed(true);
        } else {
            //navbar.classList.add('relative');
            //navbar.classList.remove('fixed', 'top-0', 'w-full');
            console.log("nig")
            setNavbarFixed(false);
        }
    }
    return(
        <div 
            id="navbar" 
            className={"w-full h-16 bg-black " + ((navbarFixed) ? "fixed top-0 w-full" : "relative")}
            onScroll={handleScroll}
        >
            <div className="flex flex-col md:flex-row justify-between items-center h-full px-4 md:px-8 sticky top-0">
            <div className="flex justify-start items-center text-white h-full space-x-4">
                <a href="#" className="text-white font-bold text-xl">Registrar-se</a>
                <a href="#" className="text-white font-bold text-xl">Autenticar-se</a>
            </div>
            <div className="flex justify-end items-center h-full space-x-4">
                <a href="#" className="text-white font-bold text-xl">Destacados</a>
            </div>
            </div>
        </div>
    )
}