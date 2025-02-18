import {createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext(); // Crear el contexto de la aplicación (Se le puede dar un valor por defecto entre parentesis)

export const ThemeContextProvider = ({children}) => {
    const cacheTheme = localStorage.getItem('cacheTheme');
    const [theme, setTheme] = useState(cacheTheme !== null ? JSON.parse(cacheTheme) : "dark"); // Estado para verificar si el usuario está registrado
    useEffect(() => {
        // localStorage stores data in the user's browser until the cache is cleared (When the cache is cleared in the clear history section), sessionStorage stores it until the user exits the browser
        // When the theme state changes, it is saved in localStorage (When the button to change the theme is pressed)
        localStorage.setItem('cacheTheme', JSON.stringify(theme));
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}