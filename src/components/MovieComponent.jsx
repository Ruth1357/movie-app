import '../App.css';
export const MovieComponent=(props)=>{
    const movieDetails=props.movie;

 return (
    <div className="movieContainer" onClick={()=>{
        props.onMovieSelect(movieDetails.imdbID)
        }}>
        <img src={movieDetails.Poster}></img>
        <span className="movieName">{movieDetails.Title}</span>
        <div className="infoColumn">
            <span className="movieInfo">Year : {movieDetails.Year}</span>
            <span className="movieInfo">Type : {movieDetails.Type}</span>
        </div>
    </div>
 )
}

