import {useState} from 'react';
import Form from './Form';
import Card from './Card';

export default function WeatherPanel() {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);

    const appid = "000129725b683e58d194bb09dc763dd9";
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&lang=es`;
    let cityUrl = "&q=";
    
    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&lang=es`;
    
    const getLocation = async(loc) => {
        setLoading(true);

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then(res => {
            if(!res.ok) throw {res};
            return res.json();
        }).then(data => {
            setWeather(data);
            setLoading(false);
            setShow(true);
        }).catch(error => {
            console.error(error);
            setLoading(false);
            setShow(false);
        });

        urlForecast = urlWeather + cityUrl + loc;

        await fetch(urlForecast).then(res => {
            if(!res.ok) throw {res};
            return res.json();
        }).then(data => {
            setWeather(data);
            setLoading(false);
            setShow(true);
        }).catch(error => {
            console.error(error);
            setLoading(false);
            setShow(false);
        });
    }
    return(
        <>
            <Form newLocation={getLocation}/>
            <Card loading={loading} show={show} weather={weather} forecast={forecast}/>
        </>
    )
}