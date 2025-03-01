import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import {NavLink} from "react-router-dom";

export default function Comment({index, comment, spaceComments}) {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    return(
        <div key={index} className={"border mx-2 mb-4 rounded-lg " + ((theme === "dark") ? "bg-red-950 border-gray-200 text-white" : "bg-red-300 border-gray-900 text-gray-900")}>
            <div className="flex flex-col sm:flex-row justify-between border-gray-200">
                <NavLink to={"/Espai/" + spaceComments[index].registre} className={"text-lg mx-2 sm:mx-4 mt-4 text-center font-bold"}>{spaceComments[index].nom}</NavLink>
            </div>
            <h3 className="text-md mx-2 mt-2 text-center font-semibold">{comment.comentari}</h3>
            {(comment.imatges && comment.imatges.length > 0) && ( // If there are images, show them
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                    {comment.imatges.map((imatge, index) => (
                        <div key={index} className={"w-full " + comment.imatges.length % 2 !== 0 && index === comment.imatges.length - 1 ? 'sm:col-span-2' : ''}>
                            <a className="w-full">
                                <img
                                    className="px-1 py-2 sm:p-4 w-full rounded-t-lg"
                                    src={imatge.imatge_url}
                                    alt={language === "CA" ? "Imatge del comentari" : language === "ES" ? "Imagen del comentario" : "Comment image"}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex justify-center mt-2 sm:mt-0 mb-4">
                {[...Array(Math.round(comment.puntuació))].map((_, index) => ( // Rounded to the nearest integer and fill the stars
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                ))}
                {(comment.puntuació < 5) && [...Array(Math.round(5 - comment.puntuació))].map((_, index) => ( // If the score is less than 5, fill the rest with empty stars
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                ))}
            </div>
        </div>
    )
}
