import {createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext(); // Create the theme context (A default value can be given in parentheses)

export const ThemeContextProvider = ({children}) => {
    const themeCache = localStorage.getItem('themeCache');
    const [theme, setTheme] = useState(themeCache !== null ? JSON.parse(themeCache) : "dark"); // State to check if the theme is dark or light, dark default
    useEffect(() => {
        // localStorage stores data in the user's browser until the cache is cleared (When the cache is cleared in the clear history section), sessionStorage stores it until the user exits the browser
        // When the theme state changes, it is saved in localStorage (When the button to change the theme is pressed)
        localStorage.setItem('themeCache', JSON.stringify(theme));
    }, [theme]);
    // The value of the context is the theme state and the function to change it
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}