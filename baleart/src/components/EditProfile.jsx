import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import Alert from "./Alert";
export default function EditProfile(){
    const { theme } = useContext(ThemeContext);
    const { token, setToken, login, setLogin } = useContext(TokenContext);
    const redirect = useNavigate(); // Hook to get the current route and be able to get back to the previous one.
    const [errors, setErrors] = useState({
        nom: [],
        cognom: [],
        email: [],
        telèfon: [],
        contrasenya: []
    });

    function handleUpdate(event) {
        event.preventDefault();
        
        axios.put("http://baleart.test/api/user/" + login.email, {
            nom: event.target.name.value,
            cognom: event.target.surname.value,
            email: event.target.email.value,
            telèfon: event.target.phone.value,
            contrasenya: event.target.password.value,
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        .then(response => {
            if(!response.data.acces_token){
                console.error("Error updating:", response.data.data);
                setErrors({
                    nom: response.data.data.nom,
                    cognom: response.data.data.cognom,
                    email: response.data.data.email,
                    telèfon: response.data.data.telèfon,
                    contrasenya: response.data.data.contrasenya
                });
                //return;
                console.log(errors);
            }
            else{
                console.log("Update successful:", response.data);
                localStorage.setItem('tokenCache', JSON.stringify(response.data.acces_token));
                setToken(response.data.acces_token);
                /*localStorage.setItem('loginCache', JSON.stringify(
                    //nom: response.data.nom,
                    //cognom: response.data.cognom,
                    //email: response.data.email,
                    //telèfon: response.data.telèfon
                    response.data.email
                ));*/
                setLogin(
                    //nom: response.data.nom,
                    //cognom: response.data.cognom,
                    //email: response.data.email,
                    //telèfon: response.data.telèfon
                    response.data.email
                );
                console.log("Formulario enviado");
                redirect("/");
            }
        })
        .catch(error => {
            console.error("Error updating:", error);
            console.log(errors);
        });
    }

    return(
        <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleUpdate}
        >
            <label htmlFor="name" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                Nom
            </label>
            <input
                type="text"
                id="name"
                name="name"
                defaultValue={login.nom}
                //onChange={(event) => setLogin({ ...login, nom: event.target.value })}
                className="w-9/10 sm:w-19/20 p-1 bg-white"
            />
            {errors.nom.length > 0 && <Alert type="danger" errors={errors.nom}/>}
            <label htmlFor="surname" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                Cognom
            </label>
            <input
                type="text"
                id="surname"
                name="surname"
                defaultValue={login.cognom}
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
                defaultValue={login.email}
                className="w-9/10 sm:w-19/20 p-1 bg-white"
            />
            {errors.email.length > 0 && <Alert type="danger" errors={errors.email}/>}
            <label htmlFor="phone" className={"m-4 font-bold " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                Telèfon
            </label>
            <input
                type="text"
                id="phone"
                name="phone"
                defaultValue={login.telèfon}
                className="w-9/10 sm:w-19/20 p-1 bg-white"
            />
            {errors.telèfon.length > 0 && <Alert type="danger" errors={errors.telèfon}/>}
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
            {errors.contrasenya.length > 0 && <Alert type="danger" errors={errors.contrasenya}/>}
            <button
                id="Register"
                className={"text-center font-bold w-9/10 sm:w-19/20 py-2 my-6 rounded " + ((theme === "dark") ? "bg-red-950 text-white" : "bg-red-300 text-gray-900")}
                type="submit"
            >
                Registrar-se
            </button>
        </form>
    )
}