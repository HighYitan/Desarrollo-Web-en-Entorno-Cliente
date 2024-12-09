import {useState} from 'react';
import styles from './Banner.module.css';
import {imageUrl, trending} from '../Constants/Constants';
import Youtube from 'react-youtube';
import { useEffect } from 'react';

export default function Banner(){
    const [movie, setMovie] = useState([]);
    const [urlId, setUrlId] = useState("");

    useEffect(() => {
        getMoviesByCategory(trending).then((data) => {
            setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
        });
    }, []);

    const handleOpen = (id) => {
        getVideos(id).then((data) => {
            if(data.results.length !== 0){
                setUrlId(data.results[0]);
            }
        });
    }
    return(
        <div style={backgroundImage: `url(${imageUrl + movie.backdrop_path})`} className={styles.banner}>
            {urlId && <Youtube opts={opts} videoId={urlId.key}/>}   
            <div className={styles.content}>
                <h1 className={styles.title}>{movie ? movie.title : ""}</h1>
                <div className={styles.banner_buttons}>
                    <button onClick={() => handleOpen(movie.id) className={styles.banner_button}}></button>
                    <button onClick={() => handleOpen(movie.id) className={styles.banner_button}}></button>
                </div>
                <h1 className={styles.description}>{movie?.overview}</h1>
            </div> 
        </div>
    )
}