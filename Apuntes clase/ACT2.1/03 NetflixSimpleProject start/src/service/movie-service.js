
import {baseUrl, API_KEY} from '../Constants/Constants'


export function getMoviesByCategory(path) {
    return fetch(baseUrl + '/'+path).then((result) => result.json());
  }

//
export function getVideos(id) {
  // Complete the fetch
    `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
}