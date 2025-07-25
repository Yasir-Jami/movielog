import "/src/styles/MovieList.css";
import { MovieGridProps, MovieInfo } from "interfaces";
import Searchbar from "@components/ui/Searchbar"
import MovieGrid from "@components/ui/MovieGrid";
import AddMovie from "@components/ui/AddMovie";

function MovieList() {
  const moviesArray: MovieInfo[] = [];
  
  const movieProps: MovieGridProps = {
    movieListName: "Watching",
    movieCount: 9,
    movieArray: moviesArray,
  }

  const movieCount = 9;

  return (
    <div className="list-container">
      <Searchbar />
      <div className="list-container__info">
        <div className="list-container__metadata">
          <h2 className="list-container__list-name">{movieProps.movieListName}</h2>
          <p className="list-container__movie-count">{movieCount} movies</p>
        </div>
        <AddMovie />
      </div>
      <MovieGrid />
    </div>
  )
}

export default MovieList;