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
import Register from './pages/user/Register'
import Login from './pages/user/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import spacesImagesJSON from './assets/data/spaces.json'
import { ThemeContextProvider } from './context/ThemeContext';
import { DataContextProvider } from './context/DataContext';
//import { NavbarFixedContext } from './components/Context'

export default function App() {
  const apiKey = "p7J4H1G2kLzT9fDxXy3mK8Qc6nA0Wr5vBLpYv7R";
  let spacesImagesString = localStorage.getItem('spacesImages');
  const [spacesImages, setSpacesImages] = useState(spacesImagesString !== null ? JSON.parse(spacesImagesString) : false); // Estado para verificar si el usuario está registrado
  let spacesString = localStorage.getItem('spaces');
  const [spaces, setSpaces] = useState(spacesString !== null ? JSON.parse(spacesString) : false); // Estado para verificar si el usuario está registrado
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
  
  /*useEffect(() => {
    
    if (!spacesImages) {
      localStorage.setItem('spacesImages', JSON.stringify(spacesImagesJSON));
      //spacesImagesString = localStorage.getItem('spacesImages');
      //const spacesImagesJSON = JSON.parse(spacesImagesJSON);
        //.catch(error => console.error('Error fetching data:', error));
      setSpacesImages(spacesImagesJSON);
    }
    if (!spaces) {
      axios.get("http://baleart.test/api/space", {
        headers: {
          "x-api-key": apiKey,
          "Accept": "application/json"
        }
      })
        .then(response => {
          localStorage.setItem('spaces', JSON.stringify(response.data.data));
          setSpaces(response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);
  console.log(spacesImages);
  console.log(spaces);*/

  /*useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);*/

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
    <DataContextProvider>
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    </DataContextProvider>
  )
}