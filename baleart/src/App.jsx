import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import './assets/css/App.css'
import Header from './components/Header'
import Customization from './components/Customization'
import Footer from './components/Footer'
import Highlights from './pages/Highlights';
import Spaces from './pages/Spaces'
import Title from './components/Title'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import spacesImagesFile from './assets/data/spaces.json'
//import { NavbarFixedContext } from './components/Context'

export default function App() {
  let spacesImagesString = localStorage.getItem('spaces');
  const [spacesImages, setSpacesImages] = useState(spacesImagesString !== null ? JSON.parse(spacesImagesString) : false); // Estado para verificar si el usuario está registrado
  let tokenString = localStorage.getItem('token');
  const [spaces, setSpaces] = useState(tokenString !== null ? JSON.parse(tokenString) : false); // Estado para verificar si el usuario está registrado
  /*useEffect(() => {
    if (!spaces) {
      fetch(spacesImage)
        .then(response => response.json())
        .then(data => {
          setSpaces(data);
          localStorage.setItem('spacesJSON', JSON.stringify(data));
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [spaces]);*/
  useEffect(() => {
    //console.log(spaces);
    if (!spacesImages) {
      console.log(spacesImages);
      localStorage.setItem('spaces', JSON.stringify(spacesImagesFile));
      spacesImagesString = localStorage.getItem('spaces');
      const spacesImagesJSON = JSON.parse(spacesImagesString);
        //.catch(error => console.error('Error fetching data:', error));
      setSpacesImages(spacesImagesJSON);
      console.log(spacesImages);
    }
    console.log(spacesImages);
  }, []);
  //console.log(spaces);
  console.log(spacesImages);

  /*useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);*/

  useEffect(() => {
    axios.get('baleart.test/api/space')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Convert JSON object to string and store it in localStorage
  /*localStorage.setItem('user', JSON.stringify(jsonObject));

  // Retrieve the string from localStorage
  const jsonString = localStorage.getItem('user');
  
  // Convert the string back to a JSON object
  const retrievedObject = JSON.parse(jsonString);
  
  console.log(retrievedObject);*/
  // Output: { name: "John Doe", age: 30, city: "New York" }
  // He incluido min-h-screen (Mirar en casa si se aplica bien el tailwind para estirar el morado hasta abajo)
  return (
    <Router>
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
    </Router>
  )
}