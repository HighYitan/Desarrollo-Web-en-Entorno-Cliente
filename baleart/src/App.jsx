import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
//import { NavbarFixedContext } from './components/Context'

export default function App() {
  const jsonObject = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  //const [spaces, setSpaces] = useState([]);
  const spacesJSON = sessionStorage.getItem('spacesJSON');
  const [spaces, setSpaces] = useState(spacesJSON !== null ? JSON.parse(spacesJSON) : false); // Estado para verificar si el usuario está registrado

  /*useEffect(() => {
    fetch('./assets/data/spaces.json')
      .then(response => response.json())
      .then(data => {
        setSpaces(data);
        localStorage.setItem('spacesJSON', JSON.stringify(data));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);*/
  useEffect(() => {
    if (!spaces) {
      fetch('./assets/data/spaces.json')
        .then(response => response.json())
        .then(data => {
          setSpaces(data);
          localStorage.setItem('spacesJSON', JSON.stringify(data));
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [spaces]);
  console.log(spaces);
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