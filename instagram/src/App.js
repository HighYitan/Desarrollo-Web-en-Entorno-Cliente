import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{maxWidth:"500px"}}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}