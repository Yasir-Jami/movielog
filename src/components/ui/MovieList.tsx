import "/src/styles/MovieList.css";
import { MovieGridProps, MovieInfo } from "src/interfaces";
import Searchbar from "src/components/ui/Searchbar"
import MovieGrid from "src/components/ui/MovieGrid";

function MovieList() {
  const moviesArray: MovieInfo[] = [];
  
  const movieProps: MovieGridProps = {
    movieListName: "",
    movieCount: 12,
    movieArray: moviesArray,
  }

  const movieCount = 13;

  return (
    <div className="list-container">
      <Searchbar />
      <div className="list-container__metadata">
        <h2 className="list-container__list-name">Watching</h2>
        <p className="list-container__movie-count">{movieCount} movies</p>
      </div>
      <MovieGrid {...movieProps}/>
    </div>
  )
}

export default MovieList;