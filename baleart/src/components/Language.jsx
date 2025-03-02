import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
export default function Language() {
    const { theme } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);

    function handleLanguageChange(event){
        setLanguage(event.target.value);
    }

    return(
        <form className="max-w-sm ml-4">
            <label
                htmlFor="languages"
                className={"block mb-2 text-sm font-medium text-center " + ((theme === "dark") ? "text-white" : "text-gray-900")}
                style={{ width: "140px" }}
            >
                {language === "CA" && "Llenguatge de la web"}
                {language === "ES" && "Idioma de la web"}
                {language === "EN" && "Website language"}
            </label>
            <select
                id="languages"
                className={"border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
                    ((theme === "dark") ? "bg-gray-900 text-white border-gray-300" : "bg-gray-300 text-gray-900 border-gray-600")}
                value={language}
                onChange={handleLanguageChange}
            >
                <option value="CA">
                    Català
                </option>
                <option value="ES">Español</option>
                <option value="EN">English</option>
            </select>
        </form>
    )
}