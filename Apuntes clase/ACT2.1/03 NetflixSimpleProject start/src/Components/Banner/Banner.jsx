import { useState } from 'react'
import styles from './Banner.module.css'
import {getMoviesByCategory, getVideos} from '../../service/movie-service'
import {useEffect} from 'react'
import { imageUrl, trending} from '../../Constants/Constants'
import YouTube from 'react-youtube'

<div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}} className={styles.banner}>
                
    const opts = {
        height:"448",
        width:"100%",
        playerVars: { autoplay: 1 }
    }
                
export default function Banner() {
}
