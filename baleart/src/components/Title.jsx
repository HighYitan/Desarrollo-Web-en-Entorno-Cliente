import {useContext, useState, useEffect} from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
import { LanguageContext } from "../context/LanguageContext";
export default function Title(){
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const { route } = useContext(TokenContext); // Show Register, Authenticate, and Highlights if user login token does not exist (Not logged)
    const { spaces } = useContext(DataContext);
    const [ title, setTitle ] = useState("");

    function updateTitle(){
        const spaceMatch = route.match(/^\/Espai\/(.+)/); //Match the route with the space route
        if (spaceMatch) {
            const registre = spaceMatch[1];
            const espai = spaces.find(space => space.registre === registre); //Find the space with the same register
            if (espai) {
                setTitle(espai.nom); //Set the title to the space name
            } else {
                {language === "CA" && setTitle("Espai")}
                {language === "ES" && setTitle("Espacio")}
                {language === "EN" && setTitle("Space")}
            }
            return;
        }
        switch (route) {
            case "/":
                {language === "CA" && setTitle("Espais Destacats")}
                {language === "ES" && setTitle("Espacios Destacados")}
                {language === "EN" && setTitle("Highlighted Spaces")}
                break;
            case "/Registre":
                {language === "CA" && setTitle("Registre")}
                {language === "ES" && setTitle("Registro")}
                {language === "EN" && setTitle("Sign Up")}
                break;
            case "/Autenticar":
                {language === "CA" && setTitle("Autenticació")}
                {language === "ES" && setTitle("Autenticación")}
                {language === "EN" && setTitle("Log In")}
                break;
            case "/Nosaltres":
                {language === "CA" && setTitle("Qui Som?")}
                {language === "ES" && setTitle("¿Quienes Somos?")}
                {language === "EN" && setTitle("Who are We?")}
                break;
            case "/Contacte":
                {language === "CA" && setTitle("Informació de Contacte")}
                {language === "ES" && setTitle("Contáctanos")}
                {language === "EN" && setTitle("Contact Information")}
                break;
            case "/Perfil":
                {(language === "CA" || language === "ES") && setTitle("Perfil")}
                {language === "EN" && setTitle("Profile")}
                break;
            case "/Espais":
                {language === "CA" && setTitle("Llistat dels Espais")}
                {language === "ES" && setTitle("Lista de Espacios")}
                {language === "EN" && setTitle("Spaces List")}
                break;
            case "/Comentaris":
                {language === "CA" && setTitle("Llistat de Comentaris")}
                {language === "ES" && setTitle("Lista de Comentarios")}
                {language === "EN" && setTitle("Comments List")}
                break;
            default: //No hace falta el default para dar el pego en el título mientras carga porque tengo una pantalla de carga en App.jsx aunque lo pondré igual por si alguien tiene un ordenador muy lento.
                {language === "CA" && setTitle("Espais Destacats")}
                {language === "ES" && setTitle("Espacios Destacados")}
                {language === "EN" && setTitle("Highlighted Spaces")}
                break;
        }
    }
    useEffect(() => {
        updateTitle();
    }, [route, language]); //Cada vez que se cambie la ruta, se actualiza el título.
    return(
        <h1 className={"text-center text-3xl font-bold italic flex-grow my-2 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
            {title}
        </h1>
    )
}