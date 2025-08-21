import "@styles/MovieListContainer.css"
import MovieCard from "@components/ui/MovieCard";
import { MovieList } from "types";

interface MovieGridProps {
  currentMovieList: MovieList,
}

//function MovieGrid (props: MovieGridProps) {
function MovieGrid({currentMovieList}: MovieGridProps) {
  const list = currentMovieList;
  const movieCount = list?.movies?.length || 0;

  return (
    <div className="movie-grid">
      {[...Array(movieCount)].map((_, i) => (
          <MovieCard key={i} {...list.movies[i]}/>
      ))}
    </div>
  )

}

export default MovieGrid;