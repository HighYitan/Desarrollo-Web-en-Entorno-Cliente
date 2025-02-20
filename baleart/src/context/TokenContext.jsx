import {createContext, useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export const TokenContext = createContext();

export const TokenContextProvider = ({children}) => {
    const tokenCache = localStorage.getItem('tokenCache');
    //console.log(tokenCache);
    const [token, setToken] = useState(tokenCache !== null ? JSON.parse(tokenCache) : null); // Estado para verificar si el usuario está registrado
    const loginCache = localStorage.getItem('loginCache');
    const [login, setLogin] = useState(loginCache !== null ? JSON.parse(loginCache) : null); // Estado para verificar si el usuario está registrado
    const routes = useLocation();
    const [route, setRoute] = useState();
    useEffect(() => {
            // localStorage stores data in the user's browser until the cache is cleared (When the cache is cleared in the clear history section), sessionStorage stores it until the user exits the browser
            // When the theme state changes, it is saved in localStorage (When the button to change the theme is pressed)
            if (!token) {
                localStorage.setItem('tokenCache', JSON.stringify(token));
                localStorage.setItem('loginCache', JSON.stringify(login));
                console.log(token);
                console.log(login);
            }
    }, [token]);
    useEffect(() => {
        setRoute(routes.pathname);
        //actualizaTitulo();
    }, [routes.pathname]); //Cada vez que se cambie la ruta, se actualiza el título.
    console.log(route);
    return (
        <TokenContext.Provider value={{ token, setToken, login, setLogin, route, setRoute }}>
            {children}
        </TokenContext.Provider>
    )
}