import "/src/styles/MovieList.css"
import AddMovie from "./AddMovie.tsx"
import {MovieInfo} from "src/MovieInterfaces.ts"

interface MovieListProps {
  listName: string,
  movieCount: number,
  movieInfo: MovieInfo,
}

interface MovieNodeProps {
  movieInfo: MovieInfo,
}

function MovieNode(props: MovieNodeProps) {
  const movieInfo: MovieInfo = {
    Title: props.movieInfo.Title,
    Poster: props.movieInfo.Poster,
    Year: props.movieInfo.Year,
    Plot: props.movieInfo.Plot,
    ImdbRating: props.movieInfo.ImdbRating,
  }

  return(
  <div className ="movie-node">
    <img src={movieInfo.Poster} className="movie-image"/>
    <p className="movie-title">{movieInfo.Title}</p>
  </div>
  )
}

function MovieList(props: MovieListProps){ 
  const {listName, movieCount, movieInfo} = props;

  return(
    <div className="movie-list-container">
      <p className="list-name">{listName}</p>
      <div className="movie-node-container">
        {[...Array(movieCount)].map((_, i) => (
          <MovieNode key={i} movieInfo={movieInfo} />
        ))}
      <AddMovie />
      </div>
    </div>
  );
}

export default MovieList