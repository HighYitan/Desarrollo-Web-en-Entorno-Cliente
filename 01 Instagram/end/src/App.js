import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css';


const App = () => {
  return (
    <div style={{maxWidth:'500px'}}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
/*
// Símil en Javascript

let corazon = document.getElementById("corazon");
corazon.addEventListener("click", () => {
  corazon.classList.toggle("corazon_active");
});


let guardar = document.getElementById("guardar")
guardar.addEventListener("click", () => {
  guardar.classList.toggle("guardar_active");
});*/
