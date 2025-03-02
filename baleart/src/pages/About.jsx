import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
export default function About() {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className={"w-full sm:w-8/10 rounded-lg shadow-sm mt-4 border " + ((theme === "dark") ? "bg-gray-800 border-gray-700" : "bg-gray-300 border-gray-200")}>
                <h1 className={"text-center font-bold py-2 text-2xl " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
                    {
                        (language === "CA" ?
                            ("Som una organització sense ànim de lucre que es dedica a la promoció de nostra cultura per mitjà d'espais històrics i artístics per totes les Illes Balears. Avui més que mai cal preservar el nostre patrimoni cultural i artístic. Uneix-te a nosaltres!") :
                        language === "ES" ?
                            ("Somos una organización sin ánimo de lucro que se dedica a la promoción de nuestra cultura por medio de espacios históricos y artísticos por todas las Islas Baleares. Hoy más que nunca hay que preservar nuestro patrimonio cultural y artístico. ¡Únete a nosotros!") :
                            ("We are a non-profit organization dedicated to the promotion of our culture through historical and artistic spaces throughout the Balearic Islands. Today more than ever we must preserve our cultural and artistic heritage. Join us!"))
                    }
                </h1>
            </div>
        </div>
    )
}