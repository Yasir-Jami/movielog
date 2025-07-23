import { MovieGridProps } from "src/interfaces";
import "src/styles/MovieList.css"
import MovieCard from "src/components/ui/MovieCard";

function MovieGrid (props: MovieGridProps) {
  const { movieListName, movieCount, movieArray } = props;

  return (
    <div className="movie-grid">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      {/* Nodes */}
    </div>
  )

}

export default MovieGrid;