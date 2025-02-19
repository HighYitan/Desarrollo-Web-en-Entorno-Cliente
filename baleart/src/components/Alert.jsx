import {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";
export default function Alert({ type, errors }) {
    const { theme } = useContext(ThemeContext);

    //For traduction if the language is changed.
    const requirements = {
        nom: ["The nom field is required.", "The nom field must be at least 2 characters.", "The nom field must be less than 100 characters.", "The nom field must be a string."],
        cognom: ["The cognom field is required.", "The cognom field must be at least 2 characters.", "The cognom field must be less than 100 characters.", "The cognom field must be a string."],
        email: ["The email field is required.", "The email field must be at least 6 characters.", "The email field must be less than 100 characters.", "The email field format is invalid.", "The email field must be a string."],
        telèfon: ["The telèfon field is required.", "The telèfon field must be at least 7 characters.", "The telèfon field must be less than 100 characters.", "The telèfon field must be a string."],
        contrasenya: ["The contrasenya field is required.", "The contrasenya field must be at least 6 characters.", "The contrasenya field must be less than 100 characters.", "The contrasenya field format is invalid.", "The contrasenya field must be a string."]
    }
    return(
        <div
            className={"flex p-4 mb-4 text-sm rounded-lg " + ((type === "danger") ? ((theme === "dark") ? "bg-red-950 text-red-300" : "bg-red-300 text-red-950") :
                ((type === "success") ? ((theme === "dark") ? "bg-green-950 text-green-300" : "bg-green-300 text-green-950") :
                    ((type === "info") ? ((theme === "dark") ? "bg-blue-950 text-blue-300" : "bg-blue-300 text-blue-950") :
                        ((type === "warning") && ((theme === "dark") ? "bg-yellow-950 text-yellow-300" : "bg-yellow-300 text-yellow-950"))
                    )
                )
            )}
            role="alert"
        >
            <svg
                className="shrink-0 inline w-4 h-4 me-3 mt-[2px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Alert Info</span>
            <div>
                <span className="font-medium">Ensure that these requirements are met:</span>
                <ul className="mt-1.5 list-disc list-inside">
                {errors && errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}
//bootstrap basic alert
//<div className={"alert alert-"+type}>{text}</div>;