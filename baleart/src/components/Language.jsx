import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
export default function Language() {
    const { theme } = useContext(ThemeContext);
    return(
        <form className="max-w-sm ml-4">
            <label
                htmlFor="languages"
                className={"block mb-2 text-sm font-medium " + ((theme === "dark") ? "text-white" : "text-gray-900")}
            >
                Llenguatge de la web
            </label>
            <select
                id="languages"
                className={"border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
                    ((theme === "dark") ? "bg-gray-900 text-white border-gray-300" : "bg-gray-300 text-gray-900 border-gray-600")}
                defaultValue="CA"
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