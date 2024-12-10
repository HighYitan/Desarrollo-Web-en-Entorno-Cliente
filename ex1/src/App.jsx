import {useState, useEffect, useRef} from 'react';
import {useImmer} from 'use-immer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./assets/css/styles.css";

import Header from './components/Header';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Favorites from './pages/Favorites';
import Stock from './pages/Stock';
import Contact from './pages/Contact';
import About from './pages/About';

export default function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}