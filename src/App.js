import {MovieComponent} from './components/MovieComponent';
import MovieInfo from './components/MovieInfo.jsx';
import axios from 'axios';
import './App.css';
import { useState } from 'react';
export const API_KEY='21afbb15';
function App() {
  const [searchQuery, updateSearchQuery]=useState("");
  const [timeOut, updateTimeOut]=useState();
  const [movieList, updateMovieList]=useState([]);
  const [selectedMovie, onMovieSelect]=useState();


const fetchData=async (MOVIE_NAME)=>{
  const response= await axios.get(`https://www.omdbapi.com/?s=${MOVIE_NAME}&apikey=${API_KEY}`);
  console.log(response.data.Search);
  updateMovieList(response.data.Search);
}



  const onTextChange =(event)=>{
     onMovieSelect("")
    clearTimeout(timeOut);
    updateSearchQuery(event.target.value);
    const timeOutId=setTimeout(()=>fetchData(event.target.value),500);
    updateTimeOut(timeOutId);
  }
  return (
    <div className="container-app">

      <div className="header">
        <div className="AppName">
         <img src="/react-movie-app/movie-icon.svg"></img>
         React Movie App
        </div>

        <div className="searchBox">
        <img src="/react-movie-app/search-icon.svg"></img>
        <input placeholder="Search Movie" value={searchQuery} onChange={onTextChange}/>
        </div>   
      </div>

    {selectedMovie && <MovieInfo selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}

      <div className="movieListContainer">
      {
        movieList?.length 
        ? movieList.map((movie,index)=> <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect} />)
        :<img className="placeHolder" src="/react-movie-app/movie-icon.svg" />
      }

      </div>
     
    </div>
  );
}

export default App;
