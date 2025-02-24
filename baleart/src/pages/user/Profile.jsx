import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";
import { TokenContext } from "../../context/TokenContext";
import Alert from "../../components/Alert";
import EditProfile from "../../components/EditProfile";
import UserComments from "../../components/UserComments";
import Logout from "../../components/Logout";
import DeleteProfile from "../../components/DeleteProfile";

export default function Profile(){
    const { theme } = useContext(ThemeContext);
    const { token, setToken, login, setLogin } = useContext(TokenContext);
    const redirect = useNavigate(); // Hook to get the current route and be able to get back to the previous one.
    const [errors, setErrors] = useState({message:[]});
    const [section, setSection] = useState("edit");
    return(
        <>
            <div className="flex justify-between">
                <div className={"flex flex-col h-full justify-between space-x-5 mx-1 w-3/10 lg:w-2/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                    <h1 className={"flex justify-center items-center text-xl sm:text-2xl rounded-lg shadow-sm font-bold py-4 mx-1 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        Seccions
                    </h1>
                    <div 
                        className={"flex justify-center items-center h-16 text-center text-xs sm:text-base rounded-lg shadow-sm font-bold py-2 m-1 " + ((theme === "dark") ? "text-white hover:text-gray-900 bg-black hover:bg-white" : "text-gray-900 hover:text-white bg-white hover:bg-black")}
                        onClick={() => setSection("edit")}
                    >
                        Editar Perfil
                    </div>
                    <div 
                        className={"flex justify-center items-center h-16 text-center text-xs sm:text-base rounded-lg shadow-sm font-bold py-2 m-1 " + ((theme === "dark") ? "text-white hover:text-gray-900 bg-black hover:bg-white" : "text-gray-900 hover:text-white bg-white hover:bg-black")}
                        onClick={() => setSection("comments")}
                    >
                        Els teus comentaris
                    </div>
                    <Logout />
                    <DeleteProfile />
                </div>
                <div className={"mr-1 w-7/10 lg:w-8/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                    {section === "edit" && <EditProfile />}
                    {section === "comments" && <UserComments />}
                </div>
            </div>
        </>
    )
}