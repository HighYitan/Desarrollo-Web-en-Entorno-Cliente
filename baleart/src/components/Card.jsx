import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
export default function Card({space, spaceImage}){
  const { theme } = useContext(ThemeContext);
  const { token, setToken, login, setLogin } = useContext(TokenContext);
  const { spacesImages, setSpacesImages } = useContext(DataContext);
  //const [spaceImage, setSpaceImage] = useState();

  space.puntuacióMitjana && console.log(space.puntuacióMitjana);
  
  return(
    <div className="flex justify-center">
      <div className={"w-full max-w-sm border rounded-lg shadow-sm mt-4 " + ((theme === "dark") ? "text-white bg-gray-900 border-white" : "text-gray-900 bg-white border-gray-900")}>
        <a href="#">
          <img
              className="p-4 w-full h-48 object-cover rounded-lg"
              src={spaceImage}
              alt={space.nom}
          />
        </a>
        <div className={"px-6 pb-6 mb-1 " + ((theme === "dark") ? "text-white" : "text-gray-900")}>
          <a href="#">
            <h5 className="text-xl text-center font-semibold tracking-tight mb-1">
              {space.nom}
            </h5>
          </a>
          <div className="flex justify-center mt-2 sm:mt-0 mb-4">
            {space.puntuacióMitjana && [...Array(Math.round(space.puntuacióMitjana))].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            ))}
            {((Math.round(space.puntuacióMitjana)) < 5) && [...Array(Math.floor(5 - space.puntuacióMitjana))].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            ))}
            {space.puntuacióMitjana &&
            <span className={"text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3 " + ((theme === "dark") ? "bg-red-300 text-gray-900" : "bg-red-950 text-gray-300")}>
              {space.puntuacióMitjana}
            </span>}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-center line-clamp-3">
              {space.observacions_CA}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}