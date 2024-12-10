import {useEffect, useState} from 'react';
import styles from './MoviesGrid.module.css';
import MovieCard from './MovieCard';
export default function MovieGrid() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("./movies.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(data);
            })
    }, []);

    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    )
}