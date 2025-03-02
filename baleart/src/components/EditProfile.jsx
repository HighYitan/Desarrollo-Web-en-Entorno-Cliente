import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { LanguageContext } from "../context/LanguageContext";
import Alert from "./Alert";
export default function EditProfile(){
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { token, login, setLogin } = useContext(TokenContext);
    const [errors, setErrors] = useState({ // Initialize errors object with empty arrays
        nom: [],
        cognom: [],
        email: [],
        telèfon: [],
        contrasenya: []
    });
    const [updated, setUpdated] = useState(false);
    // Retrieve existing loginCache from localStorage
    const existingLoginCache = JSON.parse(localStorage.getItem('loginCache')) || {};

    function handleUpdate(event) {
        event.preventDefault();

        const formData = { // Create formData object with form values
            nom: event.target.name.value,
            cognom: event.target.surname.value,
            email: event.target.email.value,
            telèfon: event.target.phone.value,
            contrasenya: event.target.password.value
        };
        axios.put("http://baleart.test/api/user/" + login.email, formData, { // Update user data
            headers: {
                Authorization: "Bearer " + token, // Send user token in request header
                "Accept": "application/json",
            },
        })
        .then(response => {
            console.log("Update successful:", response.data);

            // Merge existing loginCache with new values
            const updatedLoginCache = {
                ...existingLoginCache,
                nom: response.data.data.nom,
                cognom: response.data.data.cognom,
                email: response.data.data.email,
                telèfon: response.data.data.telèfon
            };
            // Save updated loginCache to localStorage
            localStorage.setItem('loginCache', JSON.stringify(updatedLoginCache));

            setLogin(prevLogin => ({
                ...prevLogin,
                nom: response.data.data.nom,
                cognom: response.data.data.cognom,
                email: response.data.data.email,
                telèfon: response.data.data.telèfon
            }));

            setErrors({
                nom: [],
                cognom: [],
                email: [],
                telèfon: [],
                contrasenya: []
            });

            setUpdated(true); // Set updated to true to display success message
            console.log("Formulario enviado");
        })
        .catch(error => {
            console.error("Error updating:", error.response.data.errors);
            setErrors({ // Set errors object with error messages
                nom: error.response.data.errors.nom,
                cognom: error.response.data.errors.cognom,
                email: error.response.data.errors.email,
                telèfon: error.response.data.errors.telèfon,
                contrasenya: error.response.data.errors.contrasenya
            });
            console.log(errors);
        });
    }

    return(
        <>
            <h1 className={"flex justify-center items-center text-2xl rounded-lg shadow-sm font-bold py-2 mx-1 mt-4 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                {(language === "CA" || language === "ES") ? "Editar Perfil" : "Edit Profile"}
            </h1>
            <form
                className="flex flex-col justify-center items-center"
                onSubmit={handleUpdate}
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
                    defaultValue={login.nom}
                    className="w-9/10 sm:w-19/20 p-1 bg-white"
                />
                {errors.nom && errors.nom.length > 0 && <Alert type="danger" errors={errors.nom}/>}
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
                    defaultValue={login.cognom}
                    className="w-9/10 sm:w-19/20 p-1 bg-white"
                />
                {errors.cognom && errors.cognom.length > 0 && <Alert type="danger" errors={errors.cognom}/>}
                <label htmlFor="email" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={login.email}
                    className="w-9/10 sm:w-19/20 p-1 bg-white"
                />
                {errors.email && errors.email.length > 0 && <Alert type="danger" errors={errors.email}/>}
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
                    defaultValue={login.telèfon}
                    className="w-9/10 sm:w-19/20 p-1 bg-white"
                />
                {errors.telèfon && errors.telèfon.length > 0 && <Alert type="danger" errors={errors.telèfon}/>}
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
                {errors.contrasenya && errors.contrasenya.length > 0 && <Alert type="danger" errors={errors.contrasenya}/>}
                <button
                    id="update"
                    className={"text-center font-bold w-9/10 sm:w-19/20 py-2 my-4 rounded " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                    type="submit"
                >
                    {
                        (language === "CA" ? ("Actualitzar perfil") :
                        language === "ES" ? ("Actualizar perfil") :
                        ("Update profile"))
                    }
                </button>
                {(updated && errors.nom && errors.nom.length === 0 && errors.cognom.length === 0 && errors.email.length === 0 && errors.telèfon.length === 0 && errors.contrasenya.length === 0) && <Alert type="success" errors={language === "CA" ? ["Actualització satisfactòria"] : language === "ES" ? ["Actualización satisfactoria"] : ["Update successful"]}/>}
            </form>
        </>
    )
}