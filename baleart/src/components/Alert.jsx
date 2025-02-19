import {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";
export default function Alert({ type, errorList }){
    const { theme } = useContext(ThemeContext);

    //Alert tailwindcss list
    return(
        <div
            className={"flex p-4 mb-4 text-sm rounded-lg " + ((type === "danger") ? ((theme === "dark") ? "bg-gray-800 text-red-400" : "text-red-800 bg-red-50") :
                ((type === "success") ? ((theme === "dark") ? "bg-gray-800 text-green-400" : "text-green-800 bg-green-50") :
                    ((type === "info") ? ((theme === "dark") ? "bg-gray-800 text-blue-400" : "text-blue-800 bg-blue-50") :
                        ((type === "warning") && ((theme === "dark") ? "bg-gray-800 text-yellow-400" : "text-yellow-800 bg-yellow-50"))
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
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Ensure that these requirements are met:</span>
                <ul className="mt-1.5 list-disc list-inside">
                    <li>At least 10 characters (and up to 100 characters)</li>
                    <li>At least one lowercase character</li>
                    <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                </ul>
            </div>
        </div>
    )
}
//bootstrap basic alert
//<div className={"alert alert-"+type}>{text}</div>;