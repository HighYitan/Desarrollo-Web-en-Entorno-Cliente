import {useContext, useState, useEffect} from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
export default function Title(){
    const { theme } = useContext(ThemeContext);
    const { route } = useContext(TokenContext); // Show Register, Authenticate, and Highlights if user login token does not exist (Not logged)
    const { spaces } = useContext(DataContext);
    const [ title, setTitle ] = useState("");

    function updateTitle(){
        const spaceMatch = route.match(/^\/Espai\/(.+)/);
        if (spaceMatch) {
            const registre = spaceMatch[1];
            const espai = spaces.find(space => space.registre === registre);
            if (espai) {
                setTitle(espai.nom);
            } else {
                setTitle("Espai");
            }
            return;
        }
        switch (route) {
            case "/":
                setTitle("Espais Destacats");
                break;
            case "/Registre":
                setTitle("Registre");
                break;
            case "/Autenticar":
                setTitle("Autenticació");
                break;
            case "/Nosaltres":
                setTitle("Qui som?");
                break;
            case "/Contacte":
                setTitle("Informació de Contacte");
                break;
            case "/Perfil":
                setTitle("Perfil");
                break;
            case "/Perfil/Comentaris":
                setTitle("Els meus comentaris");
                break;
            case "/Espais":
                setTitle("Llistat dels Espais");
                break;
            case "/Comentaris":
                setTitle("Llistat dels Comentaris");
                break;
            default: //No hace falta el default para dar el pego en el título mientras carga porque tengo una pantalla de carga en App.jsx aunque lo pondré igual por si alguien tiene un ordenador muy lento.
                setTitle("Espais Destacats");
                break;
        }
    }
    useEffect(() => {
        updateTitle();
    }, [route]); //Cada vez que se cambie la ruta, se actualiza el título.
    return(
        <h1 className={"text-center text-4xl font-bold italic flex-grow my-2 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
            {title}
        </h1>
    )
}