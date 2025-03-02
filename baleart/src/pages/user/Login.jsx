import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";
import { TokenContext } from "../../context/TokenContext";
import { LanguageContext } from "../../context/LanguageContext";
import Alert from "../../components/Alert";
import ResetPassword from "../../components/ResetPassword";
export default function Login(){
    const { theme } = useContext(ThemeContext);
    const { setToken, setLogin } = useContext(TokenContext);
    const { language } = useContext(LanguageContext);
    const redirect = useNavigate(); // Hook to get the current route and be able to get back to the previous one.
    const [errors, setErrors] = useState({message:[]});
    const [reset, setReset] = useState(false);

    function handleLogin(event) {
        event.preventDefault();

        axios.post("http://baleart.test/api/login", {
            email: event.target.email.value,
            contrasenya: event.target.password.value
        })
        .then(response => {
            console.log("Login successful:", response.data);
            setLogin( // Set the user's email in the context.
                response.data.email
            );
            localStorage.setItem('tokenCache', JSON.stringify(response.data.acces_token));
            setToken(response.data.acces_token);
            console.log("Formulario enviado");
            redirect("/");
        })
        .catch(error => {
            console.error("Error logging:", error);
            setErrors({
                message: [error.response.data.message],
            });
        });
    }
    return(
        <>
            {reset ? <ResetPassword setReset={setReset} /> :
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
                                {
                                    (language === "CA" ? ("Contrasenya") :
                                    language === "ES" ? ("Contraseña") :
                                    ("Password"))
                                }
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Kek12?"
                                className="w-9/10 sm:w-19/20 p-1 bg-white"
                            />
                            {errors.message.length > 0 && <Alert type="danger" errors={errors.message}/>}
                            <div className="flex justify-between w-9/10 sm:w-19/20">
                                <button
                                    id="reset"
                                    className={"text-center font-bold w-1/2 py-2 my-6 rounded mr-2 " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                                    type="button"
                                    onClick={() => setReset(true)}
                                >
                                    {
                                        (language === "CA" ? ("Contrasenya oblidada?") :
                                        language === "ES" ? ("¿Contraseña olvidada?") :
                                        ("Forgot password?"))
                                    }
                                </button>
                                <button
                                    id="login"
                                    className={"text-center font-bold w-1/2 py-2 my-6 rounded ml-2 " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                                    type="submit"
                                >
                                    {
                                        (language === "CA" ? ("Autenticar-se") :
                                        language === "ES" ? ("Autenticarse") :
                                        ("Log in"))
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}