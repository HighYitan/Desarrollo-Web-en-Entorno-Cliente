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
    const { theme } = useContext(ThemeContext); // Light or Dark theme.
    const {token} = useContext(TokenContext); // Redirect to Highlights if the user is not logged.
    const {loading} = useContext(DataContext); // Loading data from the API.

    return(
        <>
            {loading ? <Loading /> :
                <>
                    <Header /> {/* Header with the navigation bar */}
                    <main className={"min-h-screen pt-2 pb-20 mb-20 " + ((theme === "dark") ? "bg-violet-950" : "bg-violet-300")}>
                        <Customization /> {/* Language and Theme */}
                        <Title /> {/* Title of the page */}
                        <Routes>
                            {!token ? ( // If the user is not logged, allow the routes to Register and Login.
                                <>
                                    <Route path="/Registre" element={<Register />} />
                                    <Route path="/Autenticar" element={<Login />} />
                                </>
                                ) : ( // If the user is logged, allow the routes to Profile, Spaces and Comments.
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
                    <Footer /> {/* Footer with the navigation links */}
                </>
            }
        </>
    )
}