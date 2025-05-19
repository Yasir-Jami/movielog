import "/src/styles/MovieListContainer.css"
//import clapperboard_placeholder from "/src/assets/clapperboard-transparent.png"
import API from "./ApiAccess.tsx"

interface MovieContainerProps {
  listName: string,
}

interface MovieInfo {
  title: string,
  poster: string,
  year: string,
  plot: string,
  imdbRating: string,
}

interface MovieApiResponse {
  Title: string,
  Poster: string,
  Year: string,
  Plot: string,
  imdbRating: string,
}

function MovieNode() {
  const movieApi = API() as MovieApiResponse;
  const movieInfo: MovieInfo = {
    title: movieApi.Title,
    poster: movieApi.Poster,
    year: movieApi.Year,
    plot: movieApi.Plot,
    imdbRating: movieApi.imdbRating,
  }

  return(
  <div className ="movie-node">
    <img src={movieInfo.poster} className="movie-image"></img>
    <p className="movie-title">{movieInfo.title}</p>
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

function MovieListContainer(props: MovieContainerProps){ 
  const {listName} = props;
  
  return(
    <div className = "movie-container">
      <p className="list-name">{listName}</p>
      <MovieNode />
      <MovieNode />
      <MovieNode />
    </div>
  );
}

export default MovieListContainer