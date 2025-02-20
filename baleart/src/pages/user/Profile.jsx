import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";
import { TokenContext } from "../../context/TokenContext";
import Alert from "../../components/Alert";
import EditProfile from "../../components/EditProfile";
import UserComments from "../../components/UserComments";

export default function Profile(){
    const { theme } = useContext(ThemeContext);
    const { token, setToken, login, setLogin } = useContext(TokenContext);
    const redirect = useNavigate(); // Hook to get the current route and be able to get back to the previous one.
    const [errors, setErrors] = useState({message:[]});
    const [section, setSection] = useState("edit");
    return(
        <>
            <div className="flex justify-between">
                <div className={"mx-1 w-4/10 sm:w-3/10 md:w-8/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                    <div 
                        className={"flex justify-center items-center text-xs sm:text-base rounded-lg shadow-sm font-bold py-2 m-1 " + ((theme === "dark") ? "text-white hover:text-gray-900 bg-black hover:bg-white" : "text-gray-900 hover:text-white bg-white hover:bg-black")}
                        onClick={() => setSection("edit")}
                    >
                        Editar Perfil
                    </div>
                    <div 
                        className={"flex justify-center items-center text-xs sm:text-base rounded-lg shadow-sm font-bold py-2 m-1 " + ((theme === "dark") ? "text-white hover:text-gray-900 bg-black hover:bg-white" : "text-gray-900 hover:text-white bg-white hover:bg-black")}
                        onClick={() => setSection("edit")}
                    >
                        Els teus comentaris
                    </div>
                </div>
                <div className={"mr-1 w-6/10 sm:w-7/10 md:w-8/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                    {section === "edit" ? <EditProfile /> : <UserComments />}
                </div>
            </div>
        </>
    )
}