import { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import './assets/css/App.css'
import Header from './components/Header'
import Customization from './components/Customization'
import Footer from './components/Footer'
import Highlights from './pages/Highlights';
import Spaces from './pages/Spaces'
import Title from './components/Title'
import Register from './pages/user/Register'
import Login from './pages/user/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import spacesImagesJSON from './assets/data/spaces.json'
import { DataContextProvider } from './context/DataContext';
import { ThemeContextProvider } from './context/ThemeContext';
import { TokenContext, TokenContextProvider } from './context/TokenContext';

export default function App() {
  const token = useContext(TokenContext); // Redirect to Highlights if the user is not logged.
  return (
    <Router>
      <DataContextProvider>
        <TokenContextProvider>
          <ThemeContextProvider>
            <Header />
            <main className="bg-violet-950 min-h-screen pt-2 pb-20 mb-20">
              <Customization />
              <Title />
              <Routes>
                <Route path="/" element={<Highlights />} />
                <Route path="/Nosaltres" element={<About />} />
                <Route path="/Contacte" element={<Contact />} />
                <Route path="/Registre" element={<Register />} />
                <Route path="/Autenticar" element={<Login />} />
                <Route path="/Espais" element={<Spaces />}/>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            <Footer />
          </ThemeContextProvider>
        </TokenContextProvider>
      </DataContextProvider>
    </Router>
  )
}