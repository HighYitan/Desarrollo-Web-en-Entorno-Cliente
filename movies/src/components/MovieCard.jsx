import styles from './MovieCard.module.css';
export default function MovieCard({movie}) {
    return(
        <li className={styles.movieCard}>
            <a href="/movies/912649">
                <img
                    width={230}
                    height={345}
                    className={styles.movieImage}
                    src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
                    alt={movie.title}
                />
                <div>{movie.title}</div>
            </a>
        </li>
    )
}