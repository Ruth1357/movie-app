import { useState ,useEffect} from 'react';
import axios from 'axios';
import {API_KEY} from  '../App.js';
import '../App.css'

  const MovieInfo=(props)=> {
    const [movieInfo, setMovieInfo] = useState([]);
  const { selectedMovie } = props;

    useEffect(() => {
        axios.get(
          `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
        ).then((response) => setMovieInfo(response.data));
      }, [selectedMovie]);

  return (
   <div className="movieInfoContainer">
    {movieInfo ? (<>
   <img src={movieInfo?.Poster} alt={movieInfo?.Title}/>
   <div className="infoCol">
    <span className="movieName"> {movieInfo?.Type}: <span>{movieInfo?.Title}</span></span>
    <span className="movieInfo">IMDB Rating: <span>{movieInfo?.imdbRating}</span></span>
    <span className="movieInfo">Year: <span>{movieInfo?.Year}</span></span>
    <span className="movieInfo">Language: <span>{movieInfo?.Language}</span></span>
    <span className="movieInfo">Rated: <span>{movieInfo?.Rated}</span></span>
    <span className="movieInfo">Released: <span>{movieInfo?.Released}</span></span>
    <span className="movieInfo"> Runtime: <span>{movieInfo?.Runtime}</span></span>
    <span className="movieInfo">Genre: <span>{movieInfo?.Genre}</span></span>
    <span className="movieInfo">Director: <span>{movieInfo?.Director}</span></span>
    <span className="movieInfo">Actors: <span>{movieInfo?.Actors}</span></span>
    <span className="movieInfo">Plot: <span>{movieInfo?.Plot}</span></span>
   </div>
   <span className='close' onClick={() => props.onMovieSelect()}>X</span></>):"Loading..."}
   </div>
  )
}

export default MovieInfo