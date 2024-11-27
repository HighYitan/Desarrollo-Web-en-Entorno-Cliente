import { useState } from 'react'
import styles from './Banner.module.css'
import {getMoviesByCategory, getVideos} from '../../service/movie-service'
import {useEffect} from 'react'
import { imageUrl, trending} from '../../Constants/Constants'
import YouTube from 'react-youtube'

export default function Banner() {
}