export default function Navbar() {
    return(
        <div id="navbar" className="w-full h-16 bg-black relative top-0">
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