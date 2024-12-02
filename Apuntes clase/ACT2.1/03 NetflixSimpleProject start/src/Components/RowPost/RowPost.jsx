import { useEffect, useState } from 'react'
import './RowPost.css'
import {getMoviesByCategory, getVideos} from '../../service/movie-service' 
import YouTube from 'react-youtube'
import {imageUrl} from '../../Constants/Constants'

export default function RowPost(props) {
src={`${imageUrl+movie.backdrop_path}`} alt="" 
}
    const opts = {
        height:"390",
        width:"100%",
        playerVars: { autoplay: 1 }
    }