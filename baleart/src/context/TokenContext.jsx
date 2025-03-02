import {createContext, useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

export const TokenContext = createContext();

export const TokenContextProvider = ({children}) => {
    const tokenCache = localStorage.getItem('tokenCache');
    const [token, setToken] = useState(tokenCache !== null ? JSON.parse(tokenCache) : null); // State to verify if the user is logged in
    const loginCache = localStorage.getItem('loginCache');
    const [login, setLogin] = useState(loginCache !== null ? JSON.parse(loginCache) : null); // State to store the user's information
    const routes = useLocation(); // Hook to get the current route
    const [route, setRoute] = useState(); // State to store the current route
    useEffect(() => {
        if(typeof login !== 'object'){ // If login is still a string, it will replace it with the full information of the logged User
            axios.get("http://baleart.test/api/user/" + login, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(response => {
                localStorage.setItem('loginCache', JSON.stringify(response.data.data));
                setLogin(response.data.data);
                console.log(response.data.data);
            })
            .catch(error => {
                console.error(error);
            })
        }
    }, [token]);
    useEffect(() => {
        setRoute(routes.pathname);
    }, [routes.pathname]); //Cada vez que se cambie la ruta, se actualiza el título.
    console.log(route);

    return (
        <TokenContext.Provider value={{ token, setToken, login, setLogin, route, setRoute }}>
            {children}
        </TokenContext.Provider>
    )
}