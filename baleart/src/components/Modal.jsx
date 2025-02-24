import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
export default function Modal({ onSubmit, onClose, mode }) {
    const { theme } = useContext(ThemeContext);
    const { token, setToken, login, setLogin } = useContext(TokenContext);
    const { spaces, setSpaces } = useContext(DataContext);
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full bg-black/75" onClick={onClose}>
            <div className={"relative w-11/12 sm:w-6/12 rounded-lg shadow-lg " + ((theme === "dark") ? "bg-gray-900 text-white" : "bg-gray-300 text-gray-900")} onClick={(event) => event.stopPropagation()}>
                <button className="absolute top-2 right-2 text-4xl" title="Close" onClick={onClose}>
                    <span>&times;</span>
                </button>
                <h1 className={"flex justify-center items-center text-2xl sm:text-3xl rounded-lg shadow-sm font-bold py-4 mx-1 " + ((theme === "dark") ? "text-red-300" : "text-red-950")}>
                    {(mode === "logout" ? "Sortir del " : "Borrar ") + "compte"}
                </h1>
                <h3 className="text-md mx-2 mt-2 text-center font-bold">{"Segur que vols " + (mode === "logout" ? "sortir del " : "borrar el ") + "compte?"}</h3>
                <div className="flex justify-center">
                    <button
                        id="logout"
                        className={"text-center font-bold w-9/10 sm:w-19/20 py-2 my-6 rounded " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                        type="submit"
                        onClick={onSubmit}
                    >
                        {mode === "logout" ? "Sortir" : "Borrar"}
                    </button>
                </div>
            </div>
        </div>
    )

}