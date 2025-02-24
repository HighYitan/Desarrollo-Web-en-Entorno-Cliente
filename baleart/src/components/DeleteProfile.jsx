import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";
export default function DeleteProfile(){
    const { theme } = useContext(ThemeContext);
    const { token, setToken, login, setLogin } = useContext(TokenContext);
    const [showModal, setShowModal] = useState(false);
    const redirect = useNavigate();
    console.log(login);

    const headers = {
        Authorization: "Bearer " + token
    };

    function handleDelete(){
        axios.delete("http://baleart.test/api/user/" + login.email, {headers}) //Put and Delete on Axios only works with parameters in this way
            //email: login.email
         /*{
            headers: {
                Authorization: "Bearer " + token,
                "Accept": "application/json"
            }*/
        
        .then(response => {
            console.log("Delete successful:", response.data);
        })
        .catch(error => {
            console.log(token);
            console.error("Error deleting user:", error);
        });
        setToken(null);
        setLogin(null);
        localStorage.removeItem("tokenCache");
        localStorage.removeItem("loginCache");
        //setShowModal(false); // This line is not necessary because the page is redirected to the home page
        redirect("/");
    };
    return(
        <>
            <div 
                className={"flex justify-center items-center h-16 text-center text-xs sm:text-base rounded-lg shadow-sm font-bold py-2 m-1 " + ((theme === "dark") ? "text-white hover:text-gray-900 bg-black hover:bg-white" : "text-gray-900 hover:text-white bg-white hover:bg-black")}
                onClick={() => setShowModal(true)}
            >
                Borrar compte
            </div>
            {showModal && <Modal onSubmit={handleDelete} onClose={() => setShowModal(false)} mode={"delete"}/>}
        </>
    )
}