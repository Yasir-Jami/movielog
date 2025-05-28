import "/src/styles/MovieListContainer.css"
//import clapperboard_placeholder from "/src/assets/clapperboard-transparent.png"
import Movie_API from "./api/ApiAccess.tsx"

interface MovieContainerProps {
  listName: string,
  numberOfNodes: number,
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
  const movieApi = Movie_API() as MovieApiResponse;
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

function MovieListContainer(props: MovieContainerProps){ 
  const {listName, numberOfNodes} = props;

  return(
    <div className = "movie-container">
      <p className="list-name">{listName}</p>
      {[...Array(numberOfNodes)].map((_, i) => (
        <MovieNode key={i} />
      ))}
    </div>
  );
}

export default MovieListContainer