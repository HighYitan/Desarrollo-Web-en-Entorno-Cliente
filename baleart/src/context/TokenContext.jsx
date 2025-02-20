import {createContext, useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

export const TokenContext = createContext();

export const TokenContextProvider = ({children}) => {
    const tokenCache = localStorage.getItem('tokenCache');
    //console.log(tokenCache);
    const [token, setToken] = useState(tokenCache !== null ? JSON.parse(tokenCache) : null); // Estado para verificar si el usuario está registrado
    const loginCache = localStorage.getItem('loginCache');
    const [login, setLogin] = useState(loginCache !== null ? JSON.parse(loginCache) : null); // Estado para verificar si el usuario está registrado
    //const userDataCache = localStorage.getItem('userDataCache');
    //const [userData, setUserData] = useState(userDataCache !== null ? JSON.parse(userDataCache) : null); // Estado para verificar si el usuario está registrado
    const routes = useLocation();
    const [route, setRoute] = useState();
    useEffect(() => {
            // localStorage stores data in the user's browser until the cache is cleared (When the cache is cleared in the clear history section), sessionStorage stores it until the user exits the browser
            // When the theme state changes, it is saved in localStorage (When the button to change the theme is pressed)
            //if (!token) {
                //localStorage.setItem('tokenCache', JSON.stringify(token)); //Do this on logout/delete account
                //localStorage.setItem('loginCache', JSON.stringify(login));
                console.log(token);
                console.log(login);
            //}
            if(typeof login !== 'object'){ // If login is still a string, it will replace it with the full information of the logged User
                //setUserData(login);
                //localStorage.setItem('userDataCache', JSON.stringify(login));
                axios.get("http://baleart.test/api/user/" + login, {
                    headers: {
                        "Authorization": "Bearer " + token,
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
        //actualizaTitulo();
    }, [routes.pathname]); //Cada vez que se cambie la ruta, se actualiza el título.
    console.log(route);

    /*function storeUser(){
        if(login){
            //setUserData(login);
            //localStorage.setItem('userDataCache', JSON.stringify(login));
            axios.get("http://baleart.test/api/user/" + login, {
                headers: {
                    "Authorization": "Bearer " + token,
                }
            })
            .then(response => {
                localStorage.setItem('loginCache', JSON.stringify(response.data.data));
                setLogin(response.data.data);
            })
            .catch(error => {
                console.error(error);
            })
        }
    }*/

    return (
        <TokenContext.Provider value={{ token, setToken, login, setLogin, route, setRoute }}>
            {children}
        </TokenContext.Provider>
    )
}