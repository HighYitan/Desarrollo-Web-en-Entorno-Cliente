import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import './assets/css/index.css';
import './assets/css/Spinner.css';
import { Card } from './components/Card';
import { WeatherPanel } from './components/WeatherPanel';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WeatherPanel from './components/WeatherPanel';

function App() {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('Palma de Mallorca');
  const [appid, setAppid] = useState('b1b15e88fa797225412429c1c50c122a1');
  const [units, setUnits] = useState('metric');
  const [lang, setLang] = useState('es');
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <Navbar/>
      <WeatherPanel/>
      <Form newLocation={newLocation}/>
      <Card/>
  );
}

export default App;
