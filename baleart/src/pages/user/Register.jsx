import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";
import { TokenContext } from "../../context/TokenContext";
import { LanguageContext } from "../../context/LanguageContext";
import Alert from "../../components/Alert";
export default function Register(){
    const { theme } = useContext(ThemeContext);
    const { setToken, setLogin } = useContext(TokenContext);
    const { language } = useContext(LanguageContext);
    const redirect = useNavigate(); // Hook to get the current route and be able to get back to the previous one.
    const [errors, setErrors] = useState({
        nom: [],
        cognom: [],
        email: [],
        telèfon: [],
        contrasenya: []
    });

    function handleRegister(event) {
        event.preventDefault();

        axios.post("http://baleart.test/api/register", {
            nom: event.target.name.value,
            cognom: event.target.surname.value,
            email: event.target.email.value,
            telèfon: event.target.phone.value,
            contrasenya: event.target.password.value
        }, 
        )
        .then(response => {
            if(response.data.acces_token){
                console.log("Registration successful:", response.data);
                localStorage.setItem('tokenCache', JSON.stringify(response.data.acces_token));
                setToken(response.data.acces_token);
                setLogin(
                    response.data.email
                );
                console.log("Formulario enviado");
                redirect("/");
            }
            else{
                console.error("Error registering:", response.data);
                setErrors({
                    nom: response.data.nom,
                    cognom: response.data.cognom,
                    email: response.data.email,
                    telèfon: response.data.telèfon,
                    contrasenya: response.data.contrasenya
                });
                console.log(errors);
            }
        })
        .catch(error => {
            console.error("Error registering:", error);
            console.log(errors);
        });
    }

    return(
        <div className="flex justify-center">
            <div className={"w-9/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                <form
                    className="flex flex-col justify-center items-center"
                    onSubmit={handleRegister}
                >
                    <label htmlFor="name" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        {
                            (language === "CA" ? ("Nom") :
                            language === "ES" ? ("Nombre") :
                            ("Name"))
                        }
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Máximo"
                        className="w-9/10 sm:w-19/20 p-1 bg-white"
                    />
                    {errors.nom.length > 0 && <Alert type="danger" errors={errors.nom}/>}
                    <label htmlFor="surname" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        {
                            (language === "CA" ? ("Cognom") :
                            language === "ES" ? ("Apellido") :
                            ("Surname"))
                        }
                    </label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Red Tepes"
                        className="w-9/10 sm:w-19/20 p-1 bg-white"
                    />
                    {errors.cognom.length > 0 && <Alert type="danger" errors={errors.cognom}/>}
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
                    {errors.email.length > 0 && <Alert type="danger" errors={errors.email}/>}
                    <label htmlFor="phone" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        {
                            (language === "CA" ? ("Telèfon") :
                            language === "ES" ? ("Teléfono") :
                            ("Phone"))
                        }
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="+34 666333999"
                        className="w-9/10 sm:w-19/20 p-1 bg-white"
                    />
                    {errors.telèfon.length > 0 && <Alert type="danger" errors={errors.telèfon}/>}
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
                    {errors.contrasenya.length > 0 && <Alert type="danger" errors={errors.contrasenya}/>}
                    <button
                        id="register"
                        className={"text-center font-bold w-9/10 sm:w-19/20 py-2 my-6 rounded " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                        type="submit"
                    >
                        {
                            (language === "CA" ? ("Registrar-se") :
                            language === "ES" ? ("Registrarse") :
                            ("Sign Up"))
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}