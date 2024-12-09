import {useState, useEffect, useRef} from 'react';
import {useImmer} from 'use-immer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/App.css';
import {nanoid} from 'nanoid'
import Alert from './components/Alert';

export default function App() {
  const [alert, setAlert] = useImmer({
    show: false,
    type: 'success',
    message: ''
  });
  const registrado = sessionStorage.getItem('registrado');
  const [registro, setRegistro] = useState(registrado !== null ? JSON.parse(registrado) : false);
  const [proyectos, setProyectos] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const proyectosRef = useRef([]);
  /*
  function searchItems(){
    return items.filter(item => //.filter() crea un nuevo array con los elementos que cumplan la condición. .find() devuelve el primer elemento que cumpla la condición
      item.material.includes(filter) && // Si el material del item incluye el filtro. ternario
      item.name.toLowerCase().includes(search.toLowerCase()) // Si el nombre del item incluye el filtro.
    )
  }
  */
  useEffect(() => {
    // sessionStorage guarda los datos en el navegador del usuario hasta que la sesión expire (Cuando se cierra la página), localStorage los guarda hasta que el usuario los borre (No expira).
    // Cuando cambia el estado de registro, se guarda en sessionStorage (Cuando se registra el nuevo usuario)
    sessionStorage.setItem('registrado', JSON.stringify(registro));
    //sessionStorage.setItem('texto', JSON.stringify(texto));
  }, [registro]);
  useEffect(() => {
    fetch('/data/proyectos.json')
      .then(response => {
        if(!response.ok){
            throw new Error("Error en la petición por favor recarga la página");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        proyectosRef.current = data; // Save data into ref
        setProyectos(proyectosRef.current);
      })
      .catch(error => {
        console.error(error)
        handleAlert({type: "danger", text: "Error en la petición por favor recarga la página"});
      });
  }, []);
  function handleOnChange(e){
    setFilter(e.target.value);
    setProyectos(proyectosRef.current.filter(proyecto => {
      proyecto.title.toLowerCase().includes(filter.toLowerCase()
    )}));
  }
  {/* 
    <input
      type="text"
      placeholder="Filter projects"
      value={filter}
      onChange={handleOnChange}
    />
    <div>
      {proyectos.map((proyecto, index) => (
        <div key={index}>{proyecto.name}</div>
      ))}
    </div>  
  */}
  /*
  useEffect(() => {
    fetch("/houses.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoaded(true);
        setItems(data);
      },(error) => {
        setLoaded(true);
        setError(error);
        console.error(error);
      })
  }, []);
  */
  function handleAlert({type, text}){
    setAlert({show:true, type, text});
    setTimeout(() => {
      setAlert({show:false});
    }, 5000)
  }

  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');
  /*useEffect(() => { // Guarda el valor anterior del State inputValue
    previousInputValue.current = inputValue;
  }, [inputValue]);
  {<input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
  <h2>Current Value: {inputValue}</h2>
  <h2>Previous Value: {previousInputValue.current}</h2>}*/

  /*{stars>-1 && <div className="score">
    <div className={(stars>0)?"star":"star-off"}></div>
    <div className={(stars>1)?"star":"star-off"}></div>
    <div className={(stars>2)?"star":"star-off"}></div>
    <div className={(stars>3)?"star":"star-off"}></div>
    <div className={(stars>4)?"star":"star-off"}></div>
  </div>}*/
  return (
    <div className="App">
      {/*
      <Router>
        <div className="container-fluid d-flex flex-column min-vh-100 bg-dark bg-gradient">
          <Header />
          <main className="my-3">
          {alert.show && <Alert type={alert.type} text={alert.text}/>}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Proyectos" element={<Project proyectos={proyectos}/>} />
            <Route path="/Noticias" element={<Newsletter noticias={noticias}/>} />
            <Route path="/Contacto" element={<Contact />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      */}
    </div>
  );
}