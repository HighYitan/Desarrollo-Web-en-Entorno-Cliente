import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TokenContext } from "../context/TokenContext";
import { DataContext } from "../context/DataContext";
export default function Card({space, spaceImage}){
  const { theme } = useContext(ThemeContext);
  const { token, setToken, login, setLogin } = useContext(TokenContext);
  const { spacesImages, setSpacesImages } = useContext(DataContext);
  //const [spaceImage, setSpaceImage] = useState();

  console.log(spaceImage);
  
  return(
    <div className="flex justify-center">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-4">
        <a href="#">
          <img
              className="p-4 rounded-t-lg"
              src={""}
              alt={space.nom}
          />
        </a>
        <div className="px-5 pb-3">
            <a href="#">
                <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                  {space.nom}
                </h5>
            </a>
            <div className="flex justify-center mt-2 sm:mt-0 mb-4">
              {/*
                {[...Array(Math.round(comment.puntuació))].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                ))}
                {(comment.puntuació < 5) && [...Array(Math.round(5 - comment.puntuació))].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                ))}
              */}
            </div>
            <div className="flex items-center justify-center mt-2.5 mb-2.5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                    5.0
                </span>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white line-clamp-3">
                    Este espai es la hostia amigos de youtube XDDDD ALGIA ALGIA
                    ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA
                    ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA ALGIA
                    ALGIA ALGIA ALGIA ALGIA ALGIA
                </span>
                {/*<a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>*/}
            </div>
        </div>
      </div>
    </div>
  )
}
/*
import { useState, useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Youtube from "react-youtube";
import { evaluate } from "mathjs";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import specific icons from react-icons
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/App.css';
import Alert from './components/Alert';

export default function App() {
  const [alert, setAlert] = useImmer({
    show: false,
    type: 'success',
    message: ''
  });
  const registrado = sessionStorage.getItem('registrado');
  const [registro, setRegistro] = useState(registrado !== null ? JSON.parse(registrado) : false);
  const [proyectos, setProyectos] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const proyectosRef = useRef([]);

  useEffect(() => {
    fetch('/data/proyectos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Error en la petición por favor recarga la página");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        proyectosRef.current = data; // Save data into ref
        setProyectos(data);
      })
      .catch(error => {
        console.error(error);
        setAlert(draft => {
          draft.show = true;
          draft.type = "danger";
          draft.message = "Error en la petición por favor recarga la página";
        });
      });
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    setProyectos(proyectosRef.current.filter(proyecto =>
      proyecto.title.toLowerCase().includes(value.toLowerCase())
    ));
  };

  return (
    <div className="App">
      {alert.show && <Alert type={alert.type} text={alert.message} />}
      <input
        type="text"
        placeholder="Filter projects"
        value={filter}
        onChange={handleFilterChange}
      />
      <div>
        {proyectos.map((proyecto, index) => (
          <div key={index}>
            <h3>{proyecto.title}</h3>
            <div className="score">
              <FaStar className={(proyecto.stars > 0) ? "star" : "star-off"} />
              <FaStar className={(proyecto.stars > 1) ? "star" : "star-off"} />
              <FaStar className={(proyecto.stars > 2) ? "star" : "star-off"} />
              <FaStar className={(proyecto.stars > 3) ? "star" : "star-off"} />
              <FaStar className={(proyecto.stars > 4) ? "star" : "star-off"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
*/