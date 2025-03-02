import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import Alert from "./Alert"; 
export default function ResetPassword({setReset}){
    const { theme } = useContext(ThemeContext);
    const [errors, setErrors] = useState({message:[]});
    const { language } = useContext(LanguageContext);
    const [form, setForm] = useState({ // Form fields
        nom: "",
        cognom: "",
        email: "",
        telèfon: "",
        contrasenya: ""
    });
    const [user, setUser] = useState([]); // User data

    const apiKey = "p7J4H1G2kLzT9fDxXy3mK8Qc6nA0Wr5vBLpYv7R"; // API key for the backend to reset the password

    function handleUpdate() {
        console.log(user.email);
        console.log(form);
        axios.put("http://baleart.test/api/user/" + user.email, form, { // Update the user data
            headers: {
                "x-api-key": apiKey,
                "Accept": "application/json",
            },
        })
        .then(response => {
            console.log("Update successful:", response.data);

            setErrors({ // Reset errors
                message: [],
            });
            console.log("Formulario enviado");
            setReset(false);
        })
        .catch(error => {
            //console.log(error.response.data.errors);
            console.log(error);
            setErrors({ // Set the errors
                message: error.response.data.errors.contrasenya,
            });
        });
    }
    useEffect(() => {
        if(user.email){ // If the user data is loaded
            if(user.nom === form.nom && user.cognom === form.cognom && user.email === form.email && user.telèfon === form.telèfon){
                handleUpdate(); // Update the user data
            }
            else{ // If the user data is not correct
                setErrors({ message: ((language === "CA") ? ["Les credencials no són vàlides"] : (language === "ES") ? ["Las credenciales no son válidas"] : ["The credentials are not valid"])});
            }
        }
    }, [user, language]);

    function handleReset(event){
        event.preventDefault();
        const formData = { // Get the form data
            nom: event.target.name.value,
            cognom: event.target.surname.value,
            email: event.target.email.value,
            telèfon: event.target.phone.value,
            contrasenya: event.target.password.value
        };
        axios.get("http://baleart.test/api/user/" + formData.email, { // Get the user data from the database
            headers: {
                "x-api-key": apiKey,
                "Accept": "application/json"
            }
        })
        .then(response => {
            setForm(formData); // Set the form data
            setUser(response.data.data); // Set the user data
        })
        .catch(error => {
            setErrors({ message: ((language === "CA") ? ["Les credencials no són vàlides"] : (language === "ES") ? ["Las credenciales no son válidas"] : ["The credentials are not valid"])});
            console.error(error);
        })
    }
    return(
        <div className="flex justify-center">
            <div className={"w-9/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                <h1 className={"text-center font-bold py-2 mx-2 text-2xl " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {
                        (language === "CA" ? ("Respon aquestes preguntes de seguretat correctament per restablir la teva contrasenya") :
                        language === "ES" ? ("Responde estas preguntas de seguridad correctamente para reestablecer tu contraseña") :
                        ("Answer these security questions correctly to reset your password"))
                    }
                </h1>
                <form
                    className="flex flex-col justify-center items-center"
                    onSubmit={handleReset}
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
                    <h1 className={"text-center font-bold py-2 mx-2 text-2xl " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {
                        (language === "CA" ? ("Si has respost correctament a les preguntes de seguretat, introdueix la teva nova contrasenya i prem el botó de reset") :
                        language === "ES" ? ("Si has respondido correctamente a las preguntas de seguridad, introduce tu nueva contraseña y pulsa el botón de reset") :
                        ("If you have answered the security questions correctly, enter your new password and press the reset button"))
                    }
                    </h1>
                    <label htmlFor="password" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                        {
                            (language === "CA" ? ("Nova Contrasenya") :
                            language === "ES" ? ("Nueva Contraseña") :
                            ("New Password"))
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
                            id="cancel"
                            className={"text-center font-bold w-1/2 py-2 my-6 rounded mr-2 " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                            type="button"
                            onClick={() => setReset(false)}
                        >
                            {
                            (language === "CA" ? ("Cancel·lar") :
                            language === "ES" ? ("Cancelar") :
                            ("Cancel"))
                            }
                        </button>
                        <button
                            id="resetPassword"
                            className={"text-center font-bold w-1/2 py-2 my-6 rounded ml-2 " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                            type="submit"
                        >
                            {
                            (language === "CA" ? ("Reset contrasenya") :
                            language === "ES" ? ("Reset contraseña") :
                            ("Reset password"))
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}