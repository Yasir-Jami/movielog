import "/src/styles/MovieListContainer.css"
import clapperboard_placeholder from "/src/assets/clapperboard-transparent.png"
import API from "./ApiAccess.tsx"

let movieTitle: string = "Movie Title";
let defaultListText: string = "New List";
let futureListText: string = "To Watch";
let pastListText: string = "Previously Watched";
let presentListText: string = "Currently Watching";

interface MovieInfo {
  Title: string,
  Poster: string,
  Year: number,
  Plot: string,
  imdbRating: string,
}

function MovieNode() {
  const movieApi = API();
  const movieInfo: MovieInfo = {
    Title: movieApi.Title,
    Poster: movieApi.Poster,
    Year: movieApi.Year,
    Plot: movieApi.Plot,
    imdbRating: movieApi.imdbRating,
  }

  return(
  <div className ="movie-node">
    <img src={movieInfo.Poster} className="movie-image"></img>
    <p className="movie-title">{movieInfo.Title}</p>
  </div>
  )
}

/*
function renderMultipleComponents(component: Component, amount: number) {
  {Array.from({ length: amount }, (_, index) => (
    <component key={index} />
  ))}
}
*/

function MovieListContainer(){ 
  return(
    <div className = "movie-container">
      <p>{presentListText}</p>
      <MovieNode />
      <MovieNode />
      <MovieNode />
    </div>
  );
}

export default MovieListContainer