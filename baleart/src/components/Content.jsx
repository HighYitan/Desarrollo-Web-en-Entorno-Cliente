import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { TokenContext } from '../context/TokenContext';
import Header from './Header';
import Customization from './Customization';
import Footer from './Footer';
import Highlights from '../pages/Highlights';
import Spaces from '../pages/Spaces';
import Title from './Title';
import Register from '../pages/user/Register';
import Login from '../pages/user/Login';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Loading from './Loading';
import Profile from '../pages/user/Profile';
import Space from '../pages/Space';
import Comments from '../pages/Comments';
import { ThemeContext } from "../context/ThemeContext";

export default function Content(){
    const { theme } = useContext(ThemeContext);
    const {token} = useContext(TokenContext); // Redirect to Highlights if the user is not logged.c
    console.log(token);
    const {loading} = useContext(DataContext);
    console.log(loading);

    /*function handleAlert({type, text}){
        setAlert({show:true, type, text});
        setTimeout(() => {
          setAlert({show:false});
        }, 5000)
    }*/
    return(
        <>
            {loading ? <Loading /> :
                <>
                    <Header />
                    <main className={"min-h-screen pt-2 pb-20 mb-20 " + ((theme === "dark") ? "bg-violet-950" : "bg-violet-300")}>
                        <Customization />
                        <Title />
                        <Routes>
                            {!token ? (
                                <>
                                    <Route path="/Registre" element={<Register />} />
                                    <Route path="/Autenticar" element={<Login />} />
                                </>
                                ) : (
                                <>
                                    <Route path="/Perfil" element={<Profile />}/>
                                    <Route path="/Espais" element={<Spaces />}/>
                                    <Route path="/Espai/:registre" element={<Space />} />
                                    <Route path="/Comentaris" element={<Comments />}/>
                                </>)
                            }
                            <Route path="/" element={<Highlights />} />
                            <Route path="/Nosaltres" element={<About />} />
                            <Route path="/Contacte" element={<Contact />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </main>
                    <Footer />
                </>
            }
        </>
    )
}