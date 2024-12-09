import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/App.css';
import Loading from './components/Loading';
import Alert from './components/Alert';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Project from './pages/Project';
import Newsletter from './pages/Newsletter';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [proyectos, setProyectos] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [alert, setAlert] = useState({show:false});

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos de carga

    return () => clearTimeout(timer); // Limpia el temporizador
  }, []);

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
        setProyectos(data);
      })
      .catch(error => {
        console.error(error)
        handleAlert({type: "danger", text: "Error en la petición por favor recarga la página"});
      });
  }, []);

  useEffect(() => {
    fetch('/data/noticias.json')
      .then(response => {
        if(!response.ok){
            throw new Error("Error en la petición por favor recarga la página");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setNoticias(data);
      })
      .catch(error => {
        console.error(error)
        handleAlert({type: "danger", text: "Error en la petición por favor recarga la página"});
      });
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  function handleAlert({type, text}){
    setAlert({show:true, type, text});
    setTimeout(() => {
      setAlert({show:false});
    }, 5000)
  }
  /*if(alert.show){ //Si queremos sustituir la página entera por 5 segundos para que el el mensaje de error sea más visible para el usuario
    return (
      <div className={"alert alert-"+type}>{text}</div>
    )
  }*/
  return (
    <Router>
      <div className="container-fluid d-flex flex-column min-vh-100 bg-dark bg-gradient">
        <Header />
        <main className="my-3">
        {alert.show && <Alert type={alert.type} text={alert.text}/>} {/*Si queremos que el mensaje de error no sustituya la página entera pero que se vea en el main por 5 segundos*/}
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
  );
}