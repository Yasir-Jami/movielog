import "/src/styles/MovieList.css"
//import clapperboard_placeholder from "/src/assets/clapperboard-transparent.png"
import Movie_API from "./api/ApiAccess.tsx"
import AddMovie from "./AddMovie.tsx"

interface MovieListProps {
  listName: string,
  movieCount: number,
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
    <img src={movieInfo.poster} className="movie-image"/>
    <img src={""}/>
    <p className="movie-title">{movieInfo.title}</p>
  </div>
  )
}

function MovieList(props: MovieListProps){ 
  const {listName, movieCount} = props;

  return(
    <div className="movie-list-container">
      <p className="list-name">{listName}</p>
      <div className="movie-node-container">
        {[...Array(movieCount)].map((_, i) => (
          <MovieNode key={i} />
        ))}
      <AddMovie />
      </div>
    </div>
  );
}

export default MovieList