import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";
import { TokenContext } from "../../context/TokenContext";
import Alert from "../../components/Alert";
export default function Login(){
    const { theme } = useContext(ThemeContext);
    const { token, setToken, login, setLogin } = useContext(TokenContext);
    const redirect = useNavigate(); // Hook to get the current route and be able to get back to the previous one.
    const [errors, setErrors] = useState({message:[]});

    function handleLogin(event) {
        event.preventDefault();

        axios.post("http://baleart.test/api/login", {
            email: event.target.email.value,
            contrasenya: event.target.password.value
        })
        .then(response => {
            if(!response.data.acces_token){
                console.error("Error registering:", response.data);
                setErrors({
                    email: response.data.email,
                    contrasenya: response.data.contrasenya
                });
                //return;
                console.log(errors);
            }
            else{
                console.log("Login successful:", response.data);
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
                console.log("Formulario enviado");
                redirect("/");
            }
        })
        .catch(error => {
            console.error("Error logging:", error);
            setErrors({
                message: [error.response.data.message],
            });
            console.log(errors);
        });
    }
    return(
        <div className="flex justify-center">
            <div className={"w-9/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                <form
                    className="flex flex-col justify-center items-center"
                    onSubmit={handleLogin}
                >
                    <label htmlFor="email" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maximo@protonmail.com"
                        className="w-9/10 sm:w-19/20 p-1 bg-white"
                    />
                    <label htmlFor="password" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        Contrasenya
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Kek12?"
                        className="w-9/10 sm:w-19/20 p-1 bg-white"
                    />
                    {errors.message.length > 0 && <Alert type="danger" errors={errors.message}/>}
                    <button
                        id="Register"
                        className={"text-center font-bold w-9/10 sm:w-19/20 py-2 my-6 rounded " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                        type="submit"
                    >
                        Autenticar-se
                    </button>
                </form>
            </div>
        </div>
    )
}