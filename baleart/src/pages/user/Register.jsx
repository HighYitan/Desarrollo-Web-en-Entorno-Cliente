import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";
import { TokenContext } from "../../context/TokenContext";
export default function Register(){
    const { theme } = useContext(ThemeContext);
    const { token, setToken, login, setLogin } = useContext(TokenContext);
    const redirect = useLocation(); // Hook to get the current route and be able to get back to the previous one.

    function handleRegister(event) {
        event.preventDefault();

        axios.post("http://baleart.test/api/register", {
            nom: event.target.name.value,
            cognom: event.target.surname.value,
            email: event.target.email.value,
            telèfon: event.target.phone.value,
            contrasenya: event.target.password.value
        }, /*{
            headers: {
                "Accept": "application/json"
            }
        }*/
        )
        .then(response => {
            console.log("Registration successful:", response.data);
            localStorage.setItem('tokenCache', JSON.stringify(response.data.acces_token));
            setToken(response.data.acces_token);
            localStorage.setItem('loginCache', JSON.stringify({
                nom: response.data.nom,
                cognom: response.data.cognom,
                email: response.data.email,
                telèfon: response.data.telèfon
            }));
            setLogin({
                nom: response.data.nom,
                cognom: response.data.cognom,
                email: response.data.email,
                telèfon: response.data.telèfon
            });
        })
        .catch(error => {
            console.error("Error registering:", error);
        });
    
        console.log("Formulario enviado");
        redirect("/")
    }

    return(
        <div className="flex justify-center">
            <div className="w-full sm:w-4/6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-4">
                <form
                    className="flex flex-col justify-center items-center"
                    onSubmit={handleRegister}
                >
                    <label htmlFor="name" className="m-4 font-bold text-white">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Máximo"
                        className="w-5/6 p-1 bg-white"
                    />
                    <label htmlFor="surname" className="m-4 font-bold text-white">
                        Cognom
                    </label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Red Tepes"
                        className="w-5/6 p-1 bg-white"
                    />
                    <label htmlFor="email" className="m-4 font-bold text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maximo@protonmail.com"
                        className="w-5/6 p-1 bg-white"
                    />
                    <label htmlFor="phone" className="m-4 font-bold text-white">
                        Telèfon
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="+34 666333999"
                        className="w-5/6 p-1 bg-white"
                    />
                    <label htmlFor="password" className="m-4 font-bold text-white">
                        Contrasenya
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Kek12?"
                        className="w-5/6 p-1 bg-white"
                    />
                    <button
                        id="Register"
                        className="bg-red-800 text-center text-white font-bold w-5/6 py-2 my-6 rounded"
                        type="submit"
                    >
                        Registrar-se
                    </button>
                </form>
            </div>
        </div>
    )
}

/*const handleRegister = (event) => {
    event.preventDefault();

    const apiKey = "your-api-key-here"; // Replace with your actual API key

    axios.post("http://baleart.test/api/register", {
      nom: "pope",
      cognom: "gay",
      email: "popegay1488@protonmail.com",
      telefon: "+34 666333999",
      contrasenya: "Popito1488!"
    }, {
      headers: {
        "x-api-key": apiKey,
        "Accept": "application/json"
      }
    })
    .then(response => {
      console.log("Registration successful:", response.data);
    })
    .catch(error => {
      console.error("Error registering:", error);
    });

    console.log("Formulario enviado");
  };*/