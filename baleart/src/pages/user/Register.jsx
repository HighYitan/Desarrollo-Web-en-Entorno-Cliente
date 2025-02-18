import { useState } from "react";
export default function Register(){
    const [token, setToken] = useState("");
    function handleRegister(event){
        event.preventDefault();
        if (!spaces) {
            axios.post("http://baleart.test/api/register", {
                /*headers: {
                    "x-api-key": apiKey,
                    "Accept": "application/json"
                }*/
                json:{
                    "nom": "pope",
                    "cognom": "gay",
                    "email": "popegay1488@protonmail.com",
                    "telèfon": "+34 666333999",
                    "contrasenya": "Popito1488!"
                }
            })
                .then(response => {
                    localStorage.setItem('spaces', JSON.stringify(response.data.data));
                    setSpaces(response.data.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
        console.log("Formulario enviado");
    }
    return(
        <form 
            className="flex flex-col justify-center items-center"
            onSubmit={handleRegister}
        >
            <button
                id="Register"
                className="bg-red-800 text-end text-white font-bold py-2 px-4 rounded mr-4"
            >
                kekw
            </button>
        </form>
    )
}